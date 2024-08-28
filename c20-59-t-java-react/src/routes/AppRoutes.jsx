// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Cita from '../Pages/Cita'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cita' element={<Cita />} /> 
    </Routes>
  );
}

export default AppRoutes;
