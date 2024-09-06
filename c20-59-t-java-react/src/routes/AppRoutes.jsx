<<<<<<< HEAD
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
=======
// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home Copy';
import Cita from '../Pages/Cita/Cita'; 
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
import Home1 from '../Pages/Home/Home';
import MedicalHistory from '../Pages/MedicalHistory/MedicalHistory';
import CitaSimple from '../Pages/Cita1/Cita1';
import Home1 from '../Pages/Home/Home copy';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home1' element={<Home1 />} />
        <Route path='/home' element={<Home />} />
        <Route path='/consulta/:idPaciente' element={<CitaSimple />} /> 
        <Route path='/history' element={<MedicalHistory />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
      </Routes>
      {/* <BottomNavbar/> */}
    </>
>>>>>>> origin/main
  );
}

export default AppRoutes;
