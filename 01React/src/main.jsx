import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Adi from './adi.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Adi/>
  
    <App />
 </>
)
