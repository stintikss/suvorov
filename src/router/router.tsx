import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';
import Beta from '../pages/beta';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path='/beta' element={<Beta />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
