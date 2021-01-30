import '../cssFolder/NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className="admin">
      <div className="nav-bar">

        <NavLink 
          className="nav-link-margin"  
          to="/admin"
        > Admin Home </NavLink>

        <NavLink 
          className="nav-link-margin"  
          to="/products_all"
        > Products </NavLink>

        <NavLink 
          className="nav-link-margin"  
          to="/admin/products_new"
        > Add Products </NavLink>

        <NavLink 
          className="nav-link-margin"  
          to="/admin/products_delete"
        > Delete Products </NavLink>

        <NavLink 
          className="nav-link-margin"  
          to="/"
          onClick={props.switchAdmin}
        > Consumer Mode </NavLink>

      </div>
    </div>
  );
}

export default NavBar;