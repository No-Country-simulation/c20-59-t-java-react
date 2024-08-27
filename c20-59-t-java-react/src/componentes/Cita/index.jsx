import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Cita = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
      <Row className="w-100">
        <Col>
          <Card className="p-4">
            <Card.Body>
              <Card.Title>Detalles de Cita</Card.Title>
              <Form>
                <Form.Group controlId="formTime">
                  <Form.Label>Hora</Form.Label>
                  <Form.Control type="time" />
                </Form.Group>
                <Form.Group controlId="formDate">
                  <Form.Label>Fecha</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group controlId="formSymptoms">
                  <Form.Label>Síntomas</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="text"
                      placeholder="Añadir Síntoma"
                    />
                    <Button variant="primary">Añadir</Button>
                  </div>
                  <div className="mt-2">
                    {/* Aquí irán los síntomas */}
                  </div>
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
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cita;