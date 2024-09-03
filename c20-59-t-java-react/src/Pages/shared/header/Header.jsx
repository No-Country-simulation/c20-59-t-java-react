import React from 'react'
import Hand from '../../../assets/img/handHeader.png'
import ProfileImg from '../../../assets/img/profileImg.png'
import '../header/HeaderStyles.css'
import {useLocation, useNavigate} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/home'

  return (
    <div className='d-flex justify-content-between align-items-center w-100 p-3'>
      {isHomePage ? (
       <div className='d-flex justify-content-center align-items-center'>
         <img src={Hand} alt="Mano saludando en header" className='me-2 mb-2 headerHand'/>
         <p className='header mb-0 '>Hola Julia!</p>
       </div>
      ) : (
        <FaArrowLeft size={30} color='#432C81'/>
      )}
       <div>
        <img src={ProfileImg} alt="Profile picture" className='profilePicture'/>
       </div>

    </div>
  
    
  )
}

export default Header