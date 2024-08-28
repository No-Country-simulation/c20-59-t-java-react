import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaBell, FaCalendarAlt, FaArchive, FaArrowUp } from 'react-icons/fa';

const Confirmacion = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center vh-100" style={{ background: 'linear-gradient(to bottom, #003366, #336699)', color: 'white' }}>
      <div className="text-center p-4" style={{ background: 'rgba(255, 255, 255, 0.1)', borderRadius: '10px' }}>
        <FaHeart size={50} color="#003366" />
        <h1>Cita agendada con éxito</h1>
        <Row className="my-4">
          <Col>
            <Button variant="light" className="shadow-sm" style={{ color: '#003366' }}>
              <FaBell /> Activar notificaciones
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="shadow-sm" style={{ color: '#003366' }}>
              <FaCalendarAlt /> Registrar en calendario
            </Button>
          </Col>
          <Col>
            <Button variant="light" className="shadow-sm" style={{ color: '#003366' }}>
              <FaArchive /> Archivar
            </Button>
          </Col>
        </Row>
        <p>Gracias por preferirnos</p>
        <FaArrowUp size={30} color="white" />
      </div>
    </Container>
  );
};

export default Confirmacion;
