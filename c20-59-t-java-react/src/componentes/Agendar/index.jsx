import 'bootstrap/dist/css/bootstrap.min.css';

const Agendar = () => {
    return (
        <div className="container mt-5">
          <div className="card text-center shadow-sm p-4">
            {/* Logo de la empresa */}
            <img 
              src="../../assets/img/Corazón.png" 
              alt="Logo de la Empresa" 
              className="img-fluid mb-3" 
              style={{ maxWidth: '150px' }}
            />
            <img 
              src="../../assets/img/salud.png" 
              alt="Logo de la Empresa" 
              className="img-fluid mb-3" 
              style={{ maxWidth: '150px' }}
            />
            <h2 className="mb-3">Horario de Atención</h2>
            <p>Lunes a Viernes: 7:00 am - 7:00 pm</p>
            <p>Sábados: 7:00 am - 1:00 pm</p>
            {/* Botón de agendar cita */}
            <button className="btn btn-primary mt-4">Agendar Cita</button>
          </div>
        </div>
    );
};

export default Agendar;

