import { useAppConfig } from '@/hooks';
import { uploadUrl } from '@/utils/env';
import { Button, message, Upload, UploadProps } from 'antd';

function Home() {
  const { isProd, env } = useAppConfig();
  console.log('envv', isProd, env);
  const props: UploadProps = {
    name: 'file',
    action: uploadUrl,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div>
      <Button type="primary">Primary Button</Button>
      <Upload {...props}>
        <Button>Click to Upload</Button>
      </Upload>
    </div>
  );
}
export default Home;
