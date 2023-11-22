

import classes from  './Navbar.css';
import CartWidget from '../CartWidget/CarWidget';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">e-commerce proyecto</div>
      <ul className="nav-list">
        <li className="nav-item">Inicio</li>
        <li className="nav-item">Productos</li>
        <li className="nav-item">Carrito</li>
        <li className="nav-item">Contacto</li>
      </ul>
      <div className='CartWidget'>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default Navbar;