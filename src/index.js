import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import RouterSwitch from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <RouterSwitch />
    </BrowserRouter>
  </React.StrictMode>
);
