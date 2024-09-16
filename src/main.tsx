import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Portfolio from './App.tsx';

import './i18n';
import 'react-toastify/dist/ReactToastify.css';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>
);
