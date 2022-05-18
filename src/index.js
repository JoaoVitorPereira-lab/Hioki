import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App'

import Admin from './pages/Admin';
import Cadastro from './pages/Cadastro';
import LandingPage from './pages/landing-page';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/'             element={<App />} />

          <Route path='/Admin'        element={<Admin />} />
          <Route path='/cadastro'     element={<Cadastro />} />
          <Route path='/landing-page' element={<LandingPage />} />
          <Route path='/login'        element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);