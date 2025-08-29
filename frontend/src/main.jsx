import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

export const BackendURLContext = createContext({
  backend_url: "http://localhost:1337"
})

createRoot(document.getElementById('root')).render(
  <BackendURLContext.Provider value={{backend_url: "http://localhost:1337"}}>
    <App />
  </BackendURLContext.Provider>,
)
