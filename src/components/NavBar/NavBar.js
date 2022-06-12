import React, { useContext } from 'react'
import logo from '../../logo.svg';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';

const NavBar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav >
      <Link to={'/'} className='link'>
        <div className='name-store'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Mi tienda online</h1>
        </div>
      </Link>
      <ul className='nav-list'>
        <li>
          <NavLink 
            to={'/category/smartphones'} 
            className={({isActive}) => (isActive ? 'activeButton': 'inactiveButton')}
          > Smartphones 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/category/accessories'} 
            className={({isActive}) => (isActive ? 'activeButton': 'inactiveButton')}
          > Accesorios 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/category/notebooks'} 
            className={({isActive}) => (isActive ? 'activeButton': 'inactiveButton')}
          > Notebooks 
          </NavLink>
        </li>
      </ul>
      {
        cart.length>0 && <CartWidget />
      }
    </nav>
  )
}

export default NavBar
