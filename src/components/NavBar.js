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
          to="/products_men"
        > Men </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products_women"
        > Women </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products_top"
        > Top </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products_bottom"
        > Bottom </NavLink>

        <NavLink 
          className="nav-link-margin" 
          to="/products_accessory"
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