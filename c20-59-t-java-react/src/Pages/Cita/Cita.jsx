import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';


const Cita = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');

  useEffect(() => {
    if (selectedDate) {
      const times = ['09:00', '10:00', '11:00', '14:00', '15:00'];
      setAvailableTimes(times);
    }
  }, [selectedDate]);

  const handleConfirm = () => {
    confirmAlert({
      title: 'Confirmar Especialidad',
      message: '¿Está seguro de tomar esta especialidad? Si no está seguro, comuníquese con el 01 8000 6362.',
      buttons: [
        {
          label: 'Sí',
          onClick: () => {
            window.location.href = '/confirmacion';
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    });
  };

  return (
    <div className="full-screen-container d-flex flex-column">
      <Container fluid className="d-flex justify-content-center align-items-center">
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={8} lg={6} className="p-4">
            <h2 className="text-center $blue-800">Detalles de Cita</h2>
            <Form className='mb-5'>
              <Form.Group controlId="formSpecialty">
                <Form.Label>Especialidad</Form.Label>
                <Form.Control as="select">
                  <option>Seleccionar Especialidad</option>
                  <option>Neurología</option>
                  <option>Médico Internista</option>
                  <option>Ginecología</option>
                  <option>Urología</option>
                  <option>Oftalmología</option>
                  <option>Pediatría</option>
                  <option>Nutricionista</option>
                  <option>Ortopedia</option>
                  <option>Nutrición</option>
                  <option>Medicina Alternativa</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formDoctor">
                <Form.Label>Doctor</Form.Label>
                <Form.Control as="select">
                  <option>Seleccionar Doctor</option>
                  <option>Dr Ramirez</option>
                  <option>Dr Betancur</option>
                  <option>Dr Ortiz</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formDate" className=' col-sm-3'>
                <Form.Label>Fecha</Form.Label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control "
                />
              </Form.Group>
              <Form.Group controlId="formTime">
                <Form.Label>Hora</Form.Label>
                <Form.Control as="select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                  <option>Seleccionar Hora</option>
                  {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-between mt-4">
                <Button variant="primary" className="btn-cancel">
                  <NavLink className='text-white' to='/home'>Cancelación</NavLink> 
                </Button>
                <Button variant="primary" className="btn-confirm" onClick={handleConfirm}>
                  Confirmar Cita
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

