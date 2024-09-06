import React from 'react'
import { Nav } from 'react-bootstrap'

import Home from "../../../assets/icons/Vector-5.png"
import Setting from "../../../assets/icons/Setting.png"
import Notifications from "../../../assets/icons/Vector-campana.png"
import MedicHistory from "../../../assets/icons/Vector-4.png"
import '../BottomNavbar/BottomNavbarStyles.css'
import { FaChartBar, FaClipboardCheck, FaCommentDots, FaHouseUser } from 'react-icons/fa'

const BottomNavbar = () => {
  return (
        <Nav className='d-flex justify-content-evenly sombra-navbar vw-100'>
            <Nav.Link href='home'>
               <FaHouseUser size={30} className="home-icon"/>
            </Nav.Link>
            <Nav.Link href='history'>
                <FaChartBar size={30} className="home-icon"/>
            </Nav.Link>
            <Nav.Link href='notifications'>
                <FaClipboardCheck size={30} className="home-icon"/>
            </Nav.Link>
            <Nav.Link href='settings'>
                <FaCommentDots size={30} className="home-icon"/>
            </Nav.Link>
        </Nav>  
  )
}

export default BottomNavbar