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
        to="/men"
      >
        Men
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/women"
      >
        Women
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/top"
      >
        Tops
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/bottom"
      >
        Bottoms
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/accessory"
      >
        Accessory
      </NavLink>
    </div>
  );
}

export default NavBar;