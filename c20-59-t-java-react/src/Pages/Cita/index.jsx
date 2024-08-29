import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { NavLink } from 'react-router-dom';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';

const Cita = () => {
  return (
    <div className="full-screen-container d-flex flex-column">
      <Container fluid className="d-flex justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={8} lg={6} className="p-4">
            <h2 className="text-center $blue-800">Detalles de Cita</h2>
            <Form className='mb-5'>
              <Form.Group controlId="formSymptoms">
                <Form.Label>Síntomas</Form.Label>
                <div className="d-flex">
                  <Form.Control type="text" placeholder="Añadir Síntoma" />
                  <Button variant="primary" className="btn-add">Añadir</Button>
                </div>
                <div className="mt-2">
                  {/* Aquí irán los síntomas */}
                </div>
              </Form.Group>
              <Form.Group controlId="formTime">
                <Form.Label>Hora</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
              <Form.Group controlId="formDate">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group controlId="formDoctor">
                <Form.Label>Doctor</Form.Label>
                <Form.Control as="select">
                  <option>Seleccionar Doctor</option>
                  <option>Doctor 1</option>
                  <option>Doctor 2</option>
                  <option>Doctor 3</option>
                </Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-between mt-4">
                 <Button variant="primary" >{/*className="btn-cancel" */}
                  <NavLink className='text-white' to='/home'>Cancelación</NavLink> 
                </Button>
                <Button variant="primary" >{/*className="btn-confirm" */}
                  <NavLink className='text-white' to='/confirmacion'>Confirmar Cita</NavLink> 
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <BottomNavbar/>
    </div>
  );
};

export default Cita;
