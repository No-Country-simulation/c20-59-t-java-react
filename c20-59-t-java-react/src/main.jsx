import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import './index.css'
import { Auth0ProviderWithNavigate } from '../src/componentes/auth0/Auth0ProviderWithNavigate'
/* import BottomNavbar from './Pages/Home/shared/BottomNavbar/BottomNavbar'; */



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Auth0ProviderWithNavigate>
       <AppRoutes />
     </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </StrictMode>,
)     
