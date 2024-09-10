// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Home from '../Pages/Home/Home Copy';
/* import Cita from '../Pages/Cita/Cita';  */
=======
import Cita from '../Pages/Cita/Cita'; 
>>>>>>> main
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
import MedicalHistory from '../Pages/MedicalHistory/MedicalHistory';
<<<<<<< HEAD
import CitaSimple from '../Pages/Cita1/Cita1';
/* import Home1 from '../Pages/Home/Home copy'; */
=======
>>>>>>> main
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import HomeSinCita from '../Pages/Home/HomeSinCita';
import Home from '../Pages/Home/Home';
import CitaSimple from '../Pages/CitaSimple/CitaSimple';


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
<<<<<<< HEAD
       {/*  <Route path='/home' element={<Home />} /> */}
        <Route path='/home1' element={<Home1 />} />
        <Route path='/home' element={<Home />} />
        <Route path='/consulta/:idPaciente' element={<CitaSimple /* appointments={appointments} */  />} /> 
=======
        <Route path='/home' element={<Home />} />
        <Route path='/home1' element={<HomeSinCita />} />
        <Route path='/consulta/:idPaciente' element={<CitaSimple />} /> 
>>>>>>> main
        <Route path='/history' element={<MedicalHistory />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
      </Routes>
      {/* <BottomNavbar/> */}
    </>
  );
}

export default AppRoutes;
