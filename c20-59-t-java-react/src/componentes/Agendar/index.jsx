import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/Corazón.png';
import './styles.css';

const Agendar = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center shadow-sm p-4 d-flex flex-column justify-content-center align-items-center w-100 h-100">
        {/* Solo imagen del logo */}
        <img className="img-fluid mb-3 logo-img" src={logo} alt="Logo de Salud Vital" />
        <span className="text bs-primary-bg-subtle azul-900 salud-vital">Salud Vital</span>
        <h2 className="mb-3 horario-atencion">Horario de Atención</h2>
        <p>Lunes a Viernes: 7:00 am - 7:00 pm</p>
        <p>Sábados: 7:00 am - 1:00 pm</p>
        {/* Botón de agendar cita */}
        <button className="btn btn-custom mt-4">Agendar Cita</button>
        {/* Espacio para el navbar */}
        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default Agendar;
