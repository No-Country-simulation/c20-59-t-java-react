import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cita from '../componentes/Cita/index'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cita' element={<Cita />} /> {/* Nueva ruta para el componente Cita */}
    </Routes>
  );
}

export default AppRoutes;
