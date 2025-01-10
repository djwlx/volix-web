import { ModalHookType } from '@/hooks';
import { get115QrCode, get115QrCodeStatus } from '@/services/115';
import { CheckCircleFilled, CloseCircleFilled, ReloadOutlined } from '@ant-design/icons';
import { Button, Modal, QRCode, QRCodeProps, Space, Spin } from 'antd';
import { useEffect, useMemo, useState } from 'react';

interface LoginModalProps extends ModalHookType {
  visible: boolean;
}

function LoginModal(props: LoginModalProps) {
  const { visible, closeModal } = props;
  const [qrValue, setQrValue] = useState<any>();
  const [loading, setLoading] = useState(false);

  const customStatusRender: QRCodeProps['statusRender'] = info => {
    switch (info.status) {
      case 'expired':
        return (
          <div>
            <CloseCircleFilled style={{ color: 'red' }} /> {info.locale?.expired}
            <p>
              <Button type="link" onClick={info.onRefresh}>
                <ReloadOutlined /> {info.locale?.refresh}
              </Button>
            </p>
          </div>
        );
      case 'loading':
        return (
          <Space direction="vertical">
            <Spin />
            <p>Loading...</p>
          </Space>
        );
      case 'scanned':
        return (
          <div>
            <CheckCircleFilled style={{ color: 'green' }} /> {info.locale?.scanned}
          </div>
        );
      default:
        return null;
    }
  };

  const getQrCode = () => {
    setLoading(true);
    get115QrCode()
      .then(res => {
        setQrValue(res.data?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const qrCodeStatus = useMemo<QRCodeProps['status']>(() => {
    if (loading) {
      return 'loading';
    }

    return 'active';
  }, [loading]);

  useEffect(() => {
    if (visible) {
      getQrCode();
    } else {
      setQrValue(undefined);
    }
  }, [visible]);

  useEffect(() => {
    if (qrValue) {
      setTimeout(() => {
        get115QrCodeStatus(qrValue?.qrCodeValue).then(res => {
          console.log(res, 'resss');
        });
      }, 10000);
    }
  }, [qrValue]);

  return (
    <Modal closable={false} title="登录到115" open={visible} onCancel={closeModal}>
      <QRCode
        style={{ margin: '0 auto' }}
        value={qrValue?.qrCode || '-'}
        status={qrCodeStatus}
        statusRender={customStatusRender}
      />
    </Modal>
  );
}
export default LoginModal;
