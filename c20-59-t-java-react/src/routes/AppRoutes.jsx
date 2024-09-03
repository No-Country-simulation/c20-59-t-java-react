// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cita from '../Pages/Cita'; 
import Confirmacion from '../Pages/Confirmacion';
import BottomNavbar from '../Pages/shared/BottomNavbar/BottomNavbar'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cita' element={<Cita />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
      </Routes>
      {/* <BottomNavbar/> */}
    </>
  );
}

export default AppRoutes;
