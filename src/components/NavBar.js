import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
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
        onClick={props.handleClick}
      >
        Men
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
        onClick={props.handleClick}
      >
        Women
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
        onClick={props.handleClick}
      >
        Top
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
        onClick={props.handleClick}
      >
        Bottom
      </NavLink>
      <NavLink 
        style={{ marginRight: '10px' }} 
        to="/products"
        onClick={props.handleClick}
      >
        Accessory
      </NavLink>
    </div>
  );
}

export default NavBar;