import { Route, Routes } from 'react-router';
import Info115 from './pages/info';
import { NotFound } from '@/components';

function App115() {
  return (
    <Routes>
      <Route path="/info" element={<Info115 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App115;
