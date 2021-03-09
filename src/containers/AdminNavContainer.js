import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import AdminNavBar from '../components/AdminNavBar';
import history from '../history';

import ProductsContainer from './ProductsContainer'
import AdminHome from '../components/AdminHomeComponent'
import ProductNew from '../components/ProductNew'
import AdminProductsContainer from './AdminProductsContainer'
import ProductShow from '../components/ProductShow'
 
class AdminNavContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <AdminNavBar switchAdmin={this.props.switchAdmin} />
          <Switch>
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/products/:params' render={routerProps => <ProductsContainer {...routerProps} />} />
          <Route path='/admin/products/new' render={routerProps => <ProductNew {...routerProps}/>} />
          <Route path='/admin/products/delete' render={routerProps => <AdminProductsContainer {...routerProps}/>} />
          <Route path={`/product/:productId`} render={routerProps => <ProductShow {...routerProps} /> }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AdminNavContainer;