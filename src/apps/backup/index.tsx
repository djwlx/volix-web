import { Route, Routes } from 'react-router';
import { NotFound } from '@/components';
import BackupMain from './pages/main';

function BackupApp() {
  return (
    <Routes>
      <Route index element={<BackupMain />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default BackupApp;
