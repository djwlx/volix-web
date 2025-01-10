import { Route, Routes } from 'react-router';
import Home from '@/apps/home';
import App115 from '@/apps/115';
import { NotFound } from '@/components';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/115/*" element={<App115 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRouter;
