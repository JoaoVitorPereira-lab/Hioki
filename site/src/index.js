import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Admin from './pages/Admin';
import Cadastro from './pages/cadastro';
import LandingPage from './pages/landing-page';
import Login from './pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/'                         element={<LandingPage />} />
          <Route path='/Admin'                    element={<Admin />} />
          <Route path='/Admin/alterar/:idParam'        element={<Cadastro />} />
          <Route path='/cadastro'                 element={<Cadastro />} />
          <Route path='/login'                    element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);