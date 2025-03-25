import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import './main.css';
import App from './App.jsx';
import 'rsuite/dist/rsuite.min.css';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
