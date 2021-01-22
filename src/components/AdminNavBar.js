import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/admin"
      >
        Admin Home
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
      >
        Products
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/admin/products_new"
      >
        Add Products
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/"
        onClick={props.switchAdmin}
      >
        Consumer Mode
      </NavLink>
    </div>
  );
}

export default NavBar;