import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import SplashScreenHelper from './tools/SplashScreenHelper'
// import Coockie from './tools/cookie_accept/cookie'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <SplashScreenHelper />
    </Router>
  </StrictMode>,
)
