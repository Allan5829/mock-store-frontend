import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import AdminNavBar from '../components/AdminNavBar';
import history from '../history';

import ProductsContainer from './ProductsContainer'
import AdminHome from '../components/AdminHomeComponent'
import ProductNew from '../components/ProductNew'
import AdminProductsContainer from './AdminProductsContainer'
 
class AdminNavContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <AdminNavBar switchAdmin={this.props.switchAdmin} />
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/products' render={routerProps => <ProductsContainer {...routerProps} filterTerm={"none"} />} />
          <Route path='/admin/products_new' render={routerProps => <ProductNew {...routerProps}/>} />
          <Route path='/admin/products_delete' render={routerProps => <AdminProductsContainer {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default AdminNavContainer;