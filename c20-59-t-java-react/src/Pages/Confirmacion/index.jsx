import { Button, Container, Row } from 'react-bootstrap';
import { FaRegHeart, FaBell, FaCalendarAlt, FaArchive, FaArrowUp } from 'react-icons/fa';
import './styles.css';  

const Confirmacion = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-4 confirmacion-container">
        <FaRegHeart size={50} className="confirmacion-icon" />
        <h1>Cita agendada con éxito</h1>
        <Row className="confirmacion-row">
          <Button variant="light" className="confirmacion-button">
            <FaBell /> Activar notificaciones
          </Button>
          <Button variant="light" className="confirmacion-button">
            <FaCalendarAlt /> Registrar en calendario
          </Button>
          <Button variant="light" className="confirmacion-button" style={{ marginBottom: 0 }}>
            <FaArchive /> Archivar
          </Button>
        </Row>
        <p>Gracias por preferirnos</p>
        <FaArrowUp size={30} className="confirmacion-arrow" />
      </div>
    </Container>
  );
};

export default Confirmacion;
