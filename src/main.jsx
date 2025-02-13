import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import OllamaHome from './components/ChatBot01-Basic/ollamaHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   { <OllamaHome/> /* this is for basic  */}
  </StrictMode>,
)
