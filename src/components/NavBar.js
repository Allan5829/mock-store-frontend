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
          to="/products/men?page=1"
        > Men </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products/women?page=1"
        > Women </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products/top?page=1"
        > Top </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products/bottom?page=1"
        > Bottom </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products/accessory?page=1"
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