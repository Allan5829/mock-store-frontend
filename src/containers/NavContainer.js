import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import history from '../history';

import ProductsContainer from './ProductsContainer'
import Home from '../components/HomeComponent'

import AdminHome from '../components/AdminHomeComponent'
import ProductNew from '../components/ProductNew'
import AdminProductsContainer from './AdminProductsContainer'

class NavContainer extends Component {

  state ={
    filterTerm: "none"
  }

  handleClick = filter => {
    this.setState({
      filterTerm: filter
    })
  }

  componentDidMount() {
    this.checkForPathname(history.location.pathname)
}

  checkForPathname = pathname => {
    // By default NavBar renders even when viewing a component in "admin mode".
    // This functions checks if the pathname is one that should render AdminNavBar and if it is
    //  then call switchAdmin() from props.
    // This function is called from componentDidMount() to prevent any errors from changing a local state
    //  while the component is mounting. There was an error shown in console when calling from inside 
    //  render() but functionality remained the same.
    switch(pathname) {
      case("/admin"):
        this.props.switchAdmin()
      case("/admin/products_new"):
        this.props.switchAdmin()
      case("/admin/products_delete"):
        this.props.switchAdmin()
      default:
        return null
    }
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar handleClick={this.handleClick} switchAdmin={this.props.switchAdmin}/>
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={routerProps => <ProductsContainer {...routerProps} filterTerm={this.state.filterTerm}/>} />

          {/* Admin Routes */}
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/admin/products_new' render={routerProps => <ProductNew {...routerProps}/>} />
          <Route path='/admin/products_delete' render={routerProps => <AdminProductsContainer {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;