// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Cita from '../Pages/Cita/Cita'; 
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
import Home1 from '../Pages/Home/Home copy';


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home1' element={<Home1 />} />
        <Route path='/cita' element={<Cita />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
      </Routes>
      {/* <BottomNavbar/> */}
    </>
  );
}

export default AppRoutes;
