import { ModalHookType } from '@/hooks';
import { Form, Input, Modal } from 'antd';

interface AddModalProps extends ModalHookType {
  visible: boolean;
  reload?: () => void;
}
type FieldType = {
  name?: string;
  cloud_path?: string;
  local_path?: string;
};
function AddModal(props: AddModalProps) {
  const { visible, closeModal } = props;
  const submit = () => {};
  return (
    <Modal onOk={submit} title="添加备份任务" open={visible} onCancel={closeModal}>
      <Form style={{ marginTop: 16 }} initialValues={{ remember: true }} autoComplete="off">
        <Form.Item<FieldType>
          label="任务名称"
          name="name"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="云路径"
          name="cloud_path"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="本地路径"
          name="local_path"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
      </Form>
    </Modal>
  );
}
export default AddModal;
