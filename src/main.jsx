import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// دعم الدخول المباشر إلى /admin بالتحويل التلقائي إلى HashRouter
if (window.location.pathname.endsWith('/admin') && !window.location.hash) {
  window.location.replace(window.location.pathname.replace(/\/admin$/, '') + '/#/admin');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
