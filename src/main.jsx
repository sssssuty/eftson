import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/reset.css';
import './styles.css';
import App from './components/shell/App.jsx';

const appRootElement = document.getElementById('root');
const appRoot = window.__EFTSON_REACT_ROOT__ || createRoot(appRootElement);
window.__EFTSON_REACT_ROOT__ = appRoot;
appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
