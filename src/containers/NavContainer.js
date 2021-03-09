import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
      case("/products/all"):
        this.props.switchAdmin()
        break;
      case("/admin/products/new"):
        this.props.switchAdmin()
        break;
      case("/admin/products/delete"):
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
          <Switch>
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products/all' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products/men' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products/women' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products/top' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products/bottom' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/products/accessory' render={routerProps => <ProductsContainer {...routerProps} />} />

          {/* Admin Routes */}
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/admin/products/new' render={routerProps => <ProductNew {...routerProps}/>} />
          <Route path='/admin/products/delete' render={routerProps => <AdminProductsContainer {...routerProps}/>} />

          <Route path={`/products/:productId`} render={routerProps => <ProductShow {...routerProps} /> }/>

          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavContainer;