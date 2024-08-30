import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/Corazón.png';
import BottomNavbar from '../../Pages/shared/BottomNavbar/BottomNavbar';
import Header from '../../Pages/shared/header/Header';
import './AgendarConStyles.css';
import homeImg from '../../assets/img/Illustration.png'
import addDate from '../../assets/icons/AddDate.png'
import HomeBtnLines from '../../assets/icons/HomeBtnLines.png'
import Date from '../Date/Date';
const AgendarCon = () => {
  return (
    
    <div className="vh-100 d-flex flex-column position-relative">
      <Header/>
      <div className="p-3 ms-1 flex-grow-1 overflow-auto">
        <p className='header position-sticky top-0 bg-white z-index-1'>Proximas citas</p>
        <div className='flex-grow-1 overflow-auto'>
            <Date/>
            <Date/>
            <Date/>
            <Date/>
        </div>
        <NavLink to='/cita'>
          <img src={addDate} alt="Add Date Button" className='HomeBtnPosition  fixed-bottom-right'/>
        </NavLink>
      </div>
      <BottomNavbar className='position-fixed bottom-0 w-100'/>
        
    </div>
  );
};

export default AgendarCon;