import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import Navbar from './components/Navbar.tsx'
import Projects from './components/Projects.tsx'
import Education from './components/Education.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode> 
      <Navbar />
      <App />
      <Projects />
      <Education/>
      <Footer/>
    
  </StrictMode>,
)
