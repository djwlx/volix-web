import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import AppRouter from '@/layouts/router';
import { AppConfigProvider } from '@/layouts/config';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider>
      <AppConfigProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </AppConfigProvider>
    </ConfigProvider>
  </StrictMode>
);
