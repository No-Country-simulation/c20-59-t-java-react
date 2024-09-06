import { Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cita from '../componentes/Cita/index'; 
import BottomNavbar from '../Pages/Home/shared/BottomNavbar/BottomNavbar';

const AppRoutes = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <div className='flex-grow-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cita' element={<Cita />} /> {/* Nueva ruta para el componente Cita */}
        </Routes>
      </div>
      <BottomNavbar/>
    </div>
  );
}

export default AppRoutes;
