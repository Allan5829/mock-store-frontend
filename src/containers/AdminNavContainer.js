import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import AdminNavBar from '../components/AdminNavBar';
import history from '../history';

import ProductAndFilterContainer from './PAndFContainer'
import AdminHome from '../components/AdminHomeComponent'
import ProductNew from '../components/ProductNew'

class AdminNavContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <AdminNavBar />
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/admin/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"none"} />} />
          <Route path='/admin/products/new' render={routerProps => <ProductNew {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default AdminNavContainer;