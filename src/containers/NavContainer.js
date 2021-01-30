import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import history from '../history';

import ProductsContainer from './ProductsContainer'
import Home from '../components/HomeComponent'

import AdminHome from '../components/AdminHomeComponent'
import ProductNew from '../components/ProductNew'
import AdminProductsContainer from './AdminProductsContainer'
import ProductShow from '../components/ProductShow'

class NavContainer extends Component {

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
        break;
      case("/products_all"):
        this.props.switchAdmin()
        break;
      case("/admin/products_new"):
        this.props.switchAdmin()
        break;
      case("/admin/products_delete"):
        this.props.switchAdmin()
        break;
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
          <Route path='/products_men' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products_women' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products_top' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products_bottom' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products_accessory' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path={`/products/:productId`} render={routerProps => <ProductShow {...routerProps} test={history.location.pathname}/> }/>

          {/* Admin Routes */}
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/products_all' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/admin/products_new' render={routerProps => <ProductNew {...routerProps}/>} />
          <Route path='/admin/products_delete' render={routerProps => <AdminProductsContainer {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;