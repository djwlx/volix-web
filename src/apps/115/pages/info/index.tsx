import { get115UserInfo } from '@/services/115';
import { CheckCircleTwoTone, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Space } from 'antd';
import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import { useModalHook } from '@/hooks';

const { Meta } = Card;
function Info115() {
  const [userInfo, setUserInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { setModalData, ...rest } = useModalHook();

  useEffect(() => {
    setLoading(true);
    get115UserInfo()
      .then(res => {
        setUserInfo(res.data?.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Card
      loading={loading}
      title="登录信息"
      extra={
        userInfo ? (
          <Button icon={<PoweroffOutlined />} danger type="primary">
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
      <LoginModal {...rest} />
    </Card>
  );
}

export default Info115;
