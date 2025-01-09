import { Route, Routes } from 'react-router';
import Home from '../apps/home';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default AppRouter;
