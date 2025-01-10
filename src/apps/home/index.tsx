import { FlexContainer } from '@/components';
import AppItem from './components/AppItem';

function Home() {
  return (
    <FlexContainer>
      <AppItem path="/115/info" iconUrl="https://img.djwl.top/icon/5.png" title="我的115" description="115信息查询" />
    </FlexContainer>
  );
}
export default Home;
