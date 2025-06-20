import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import './index.css'
// import SplashScreenHelper from './tools/SplashScreenHelper'
import Router from './router/router'
// import Coockie from './tools/cookie_accept/cookie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router />
  </StrictMode>,
)
