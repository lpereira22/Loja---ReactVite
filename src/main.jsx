import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/Home/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
  </StrictMode>,
)
