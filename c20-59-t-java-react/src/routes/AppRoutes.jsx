// routes/AppRoutes.js
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Cita from '../Pages/Cita/Cita'; 
import Confirmacion from '../Pages/Confirmacion/Confirmacion';
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
        <Route path='/cita' element={<Cita />} /> 
        <Route path='/confirmacion' element={<Confirmacion />} /> 
      </Routes>
      {/* <BottomNavbar/> */}
    </>
  );
}

export default AppRoutes;
