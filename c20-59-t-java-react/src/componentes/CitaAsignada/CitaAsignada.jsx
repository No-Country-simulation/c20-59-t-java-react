
import 'bootstrap/dist/css/bootstrap.min.css';
import './CitaAsignadaStyles.css'

const CitaAsignada = () => {
  return (
    <div className="container mt-4">
      <div className="card" >
        <div className="card-body">
          <h2 className="card-title" >Información de la Cita</h2>
          <p className="card-text" >Doctor: Ramírez</p>
          <p className="card-text" >Fecha: Jueves, 4 de septiembre</p>
          <p className="card-text" >Hora: 8:00 AM</p>
        </div>
      </div>
    </div>
  );
};



export default CitaAsignada;
