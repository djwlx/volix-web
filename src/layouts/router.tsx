import { Route, Routes } from 'react-router';
import Home from '@/apps/home';
import Router115 from '@/apps/115';
import Pic from '@/apps/pic';
import { NotFound } from '@/components';
import BackupApp from '@/apps/backup';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/115/*" element={<Router115 />} />
      <Route path="/backup/*" element={<BackupApp />} />
      <Route path="/pic/*" element={<Pic />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default AppRouter;
