import React from 'react'
import logo from '../../logo.svg';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav >
        <div className='name-store'>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Mi tienda online</h1>
        </div>
        
        <ul className='nav-list'>
            <li><a  href='.'> Vehiculos </a></li>
            <li><a  href='.'> Tecnología </a></li>
            <li><a  href='.'> Libros </a> </li>
        </ul>
        <CartWidget amount={ 2 }/>
    </nav>
  )
}

export default NavBar
