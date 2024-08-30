import React from 'react'
import Hand from '../../../assets/img/handHeader.png'
import ProfileImg from '../../../assets/img/profileImg.png'
import '../header/HeaderStyles.css'

const Header = () => {
  return (
    <div className='d-flex justify-content-between w-100 p-3'>
       <div className='d-flex justify-content-center align-items-center'>
         <img src={Hand} alt="Mano saludando en header" className='me-2 mb-2 headerHand'/>
         <p className='header mb-0 '>Hola Julia!</p>
       </div>
       <div>
        <img src={ProfileImg} alt="Profile picture" className='profilePicture'/>
       </div>

    </div>
  
    
  )
}

export default Header