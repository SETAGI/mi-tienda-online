import React from 'react'
import logo from '../../logo.svg';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
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
            className={({isActive}) => isActive && 'activeButton'}
          > Smartphones 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/category/accessories'} 
            className={({isActive}) => isActive && 'activeButton'}
          > Accesorios 
          </NavLink>
        </li>
        <li>
          <NavLink 
            to={'/category/notebooks'} 
            className={({isActive}) => isActive && 'activeButton'}
          > Notebooks 
          </NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
