import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import AdminNavBar from '../components/AdminNavBar';
import history from '../history';

import ProductAndFilterContainer from './PAndFContainer'
import AdminHome from '../components/AdminHomeComponent'
//import AdminContainer from './AdminContainer'

// might end up taking out <Route path='/admin' render={routerProps => <AdminContainer {...routerProps}/>} />

class AdminNavContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <AdminNavBar />
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/admin/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"none"} />} />
        </div>
      </Router>
    );
  }
}

export default AdminNavContainer;