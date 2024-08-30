import React from 'react'
import { Nav } from 'react-bootstrap'

import Home from "../../../assets/icons/Vector-5.png"
import Setting from "../../../assets/icons/Setting.png"
import Notifications from "../../../assets/icons/Vector-campana.png"
import MedicHistory from "../../../assets/icons/Vector-4.png"
import '../BottomNavbar/BottomNavbarStyles.css'

const BottomNavbar = () => {
  return (
        <Nav className='d-flex justify-content-evenly sombra-navbar vw-100'>
            <Nav.Link href='home'>
                <img className='navIcon' src={Home} alt="Home button" />
            </Nav.Link>
            <Nav.Link href='history'>
                <img className='navIcon' src={MedicHistory} alt="Medical history button" />
            </Nav.Link>
            <Nav.Link href='notifications'>
                <img className='navIcon' src={Notifications} alt="Home button" />
            </Nav.Link>
            <Nav.Link href='settings'>
                <img className='navIcon' src={Setting} alt="Settings button" />
            </Nav.Link>
        </Nav>  
  )
}

export default BottomNavbar