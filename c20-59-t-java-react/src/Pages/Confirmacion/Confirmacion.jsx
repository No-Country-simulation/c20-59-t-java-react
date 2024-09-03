import { Button, Container, Row } from 'react-bootstrap';
import { FaRegHeart, FaBell, FaCalendarAlt, FaArchive, FaArrowUp, FaHeart } from 'react-icons/fa';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';
import CitaAsignada from '../../componentes/CitaAsignada/CitaAsignada';
import './ConfirmacionStyles.css';  

const Confirmacion = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const specialty = queryParams.get('specialty');
  const doctor = queryParams.get('doctor');
  const date = queryParams.get('date');
  const time = queryParams.get('time');

  return (
    <div className='full-screen-container d-flex flex-column'>
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <div className="text-center p-4 confirmacion-container">
          <FaRegHeart size={50} className="confirmacion-icon" />
          <h1>Cita agendada con éxito</h1>
          <div className='containerCitaAegendada'>
            <CitaAsignada specialty={specialty} doctor={doctor} date={date} time={time} />
          </div>
      
      <Container fluid className=" d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex flex-column text-center align-items-center p-4">
          <FaHeart size={50} className="confirmacion-icon" />
          <h1 className='successText'>Cita agendada con éxito</h1>
          <Row className='mb-2 mt-3 '>
            <b><u>Resumen de la cita</u> </b> 
            <Row>
              <span><b>Especialidad:</b> Traumatologia</span>
              <span><b>Fecha:</b> 12/09 - 09:15hs</span>
              <span><b>Doctor:</b> Dr. Trauma Tologo</span>
            </Row>
          </Row>
          <Row className="confirmacion-row">
            <Button variant="light" className="confirmacion-button">
              <FaBell /> Confirmación Correo Electrónico
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
