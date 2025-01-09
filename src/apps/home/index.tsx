import { useAppConfig } from '@/hooks';
import { Button } from 'antd';

function Home() {
  const { isProd, env } = useAppConfig();

  return (
    <div>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}
export default Home;
