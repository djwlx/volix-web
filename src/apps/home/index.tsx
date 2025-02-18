import { FlexContainer } from '@/components';
import AppItem from './components/AppItem';

function Home() {
  return (
    <FlexContainer>
      <AppItem path="/115" iconUrl="https://img.djwl.top/icon/5.png" title="我的115" description="115应用设置" />
      <AppItem path="/backup" title="文件备份" description="自动备份文件夹" />
    </FlexContainer>
  );
}
export default Home;
