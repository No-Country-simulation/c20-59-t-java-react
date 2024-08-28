// En algún componente de navegación, por ejemplo, Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/cita">Cita</Link></li> {/* Enlace a la nueva página */}
      </ul>
    </nav>
  );
};

export default Navbar;
