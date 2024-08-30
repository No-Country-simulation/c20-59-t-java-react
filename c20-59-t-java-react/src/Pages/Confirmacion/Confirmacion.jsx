import { Button, Container, Row } from 'react-bootstrap';
import { FaRegHeart, FaBell, FaCalendarAlt, FaArchive, FaArrowUp } from 'react-icons/fa';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';
import CitaAsignada from '../../componentes/CitaAsignada/CitaAsignada';
import './ConfirmacionStyles.css';  

const Confirmacion = () => {
  return (
    <div className='full-screen-container d-flex flex-column'>
      <Container fluid className=" d-flex justify-content-center align-items-center vh-100">
        <div className="text-center p-4 confirmacion-container">
          <FaRegHeart size={50} className="confirmacion-icon" />
          <h1>Cita agendada con éxito</h1>
          <div className='containerCitaAegendada'>
            <CitaAsignada />
          </div>
          <Row className="confirmacion-row">
            <Button variant="light" className="confirmacion-button">
              <FaBell /> Confirmacion Correo Electronico
            </Button>
            <Button variant="light" className="confirmacion-button">
              <FaCalendarAlt /> Registrar en calendario
            </Button>
            <Button variant="light" className="confirmacion-button" style={{ marginBottom: 0 }}>
              <FaArchive /> Reprogramar Cita
            </Button>
          </Row>
          <p>Gracias por preferirnos</p>
          <FaArrowUp size={30} className="confirmacion-arrow" />
        </div>
      </Container>
      <BottomNavbar/>
    </div>
  );
};

export default Confirmacion;
