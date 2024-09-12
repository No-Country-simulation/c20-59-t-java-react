// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
/* import Cita from '../Pages/Cita/Cita';  */
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
import MedicalHistory from '../Pages/MedicalHistory/MedicalHistory';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import HomeSinCita from '../Pages/Home/HomeSinCita';
import Home from '../Pages/Home/Home';
import CitaSimple from '../Pages/CitaSimple/CitaSimple';
import Profile from '../Pages/Profile/Profile';
import { AuthenticationGuard } from '../componentes/auth0/AuthenticationGuard';
import CallbackPage from '../componentes/auth0/CallbackPage';


const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<SignUp />} />
        {/* <Route path='/' element={<SignIn />} /> */}
        <Route path='/home' element={<Home/>}  />
        <Route path='/consulta/:idPaciente' element={<CitaSimple />} /> 
        <Route path='/history' element={<MedicalHistory />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
        <Route path='/perfil' element={<Profile />} /> 
        <Route path='/callback' element={<CallbackPage/>}/>
      </Routes>
      {/* <BottomNavbar/> */}
    </>
  );
}

export default AppRoutes;