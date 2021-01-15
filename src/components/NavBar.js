import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
      >
        Men
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
      >
        Women
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
      >
        Tops
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
      >
        Bottoms
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
      >
        Accessory
      </NavLink>
    </div>
  );
}

export default NavBar;