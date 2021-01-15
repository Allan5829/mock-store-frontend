import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
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
          <Link onClick={() => this.props.switchAdmin()} to={`/`}> Admin Switch </Link>
          <AdminNavBar />
          <Route exact path="/admin" render={() => <AdminHome/>} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"none"} />} />
          <Route path='/admin/products_new' render={routerProps => <ProductNew {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default AdminNavContainer;