import '../cssFolder/NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="consumer">
      <div className="nav-bar">

        <NavLink 
          className="nav-link-margin" 
          to="/"
        > Home </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products"
          onClick={props.handleClick}
        > Men </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products"
          onClick={props.handleClick}
        > Women </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products"
          onClick={props.handleClick}
        > Top </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products"
          onClick={props.handleClick}
        > Bottom </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products"
          onClick={props.handleClick}
        > Accessory </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/admin"
          onClick={props.switchAdmin}
        > Admin Mode </NavLink>

      </div>
    </div>
  );
}

export default NavBar;