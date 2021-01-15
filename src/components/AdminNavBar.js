import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
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
        to="/admin/products"
      >
        Products
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/admin/products/new"
      >
        Add Products
      </NavLink>
    </div>
  );
}

export default NavBar;