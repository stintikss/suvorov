import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
// import NotFound from '../pages/NotFound';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
};

export default Router;
