import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './contexts/Context.jsx'
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <ContextProvider>
  
    <App />
 
  </ContextProvider>
)
