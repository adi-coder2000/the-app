import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Work from "./pages/work";
import About from "./pages/about";
import Contact from "./pages/contact";
import * as ROUTES from "./constants/routes"

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.WORK} element={<Work />} exact />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


