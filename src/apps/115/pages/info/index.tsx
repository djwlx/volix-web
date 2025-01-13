import { get115LoginStatus, get115UserInfo, exit115 as exit115Service } from '@/services/115';
import { CheckCircleTwoTone, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Space } from 'antd';
import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import { useModalHook } from '@/hooks';
import FileList from './FileList';

const { Meta } = Card;
function Info115() {
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [exit115Loading, setExit115Loading] = useState(false);
  const { setModalData, ...rest } = useModalHook();

  const get115Info = async () => {
    setLoading(true);
    try {
      const result = await get115UserInfo();
      if (result.data?.code === 0) {
        const status = await get115LoginStatus();
        const loginSuccess = status.data?.data?.check_ssd;
        if (loginSuccess) {
          setUserInfo(result.data?.data);
        } else {
          setUserInfo(undefined);
        }
      } else {
        setUserInfo(undefined);
      }
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const exit115 = async () => {
    try {
      setExit115Loading(true);
      await exit115Service();
      await get115Info();
    } catch (e) {
    } finally {
      setExit115Loading(false);
    }
  };

  useEffect(() => {
    get115Info();
  }, []);

  return (
    <>
      <Card
        loading={loading}
        title="登录信息"
        extra={
          userInfo ? (
            <Button loading={exit115Loading} onClick={exit115} icon={<PoweroffOutlined />} danger type="primary">
              退出登录
            </Button>
          ) : null
        }
        hoverable
        actions={[]}
      >
        {userInfo ? (
          <Meta
            avatar={<Avatar src={userInfo?.face?.face_s} />}
            title={
              <Space>
                <span>{userInfo?.user_name}</span>
                <CheckCircleTwoTone twoToneColor="#52c41a" />
              </Space>
            }
            description={userInfo?.user_id}
          />
        ) : (
          <Button
            type="primary"
            onClick={() => {
              setModalData('open');
            }}
          >
            点击登录
          </Button>
        )}
        <LoginModal reload={get115Info} {...rest} />
      </Card>
      {userInfo && (
        <Card style={{ marginTop: 16 }} title="文件信息" hoverable>
          <FileList />
        </Card>
      )}
    </>
  );
}

export default Info115;
