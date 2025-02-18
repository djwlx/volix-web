import { Space } from 'antd';
import Directories from '../../components/Directories';
import TargetCloud from '../../components/TargetCloud';

function BackupMain() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <TargetCloud />
      <Directories />
    </Space>
  );
}
export default BackupMain;
