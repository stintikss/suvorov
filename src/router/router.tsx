import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
