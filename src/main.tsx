import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Routers from './router/router'
import SplashScreen from './ui/SplashScreen'
import React, { useState, useEffect } from 'react';
import SplashScreenHelper from './tools/SplashScreenHelper'
// import Coockie from './tools/cookie_accept/cookie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <SplashScreenHelper />
    </Router>
  </StrictMode>,
)
