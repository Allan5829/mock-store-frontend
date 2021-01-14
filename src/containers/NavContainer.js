import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import history from '../history';

import ProductAndFilterContainer from './PAndFContainer'
import Home from '../components/HomeComponent'
import AdminContainer from './AdminContainer'

class NavContainer extends Component {
  render() {



    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"none"} />} />
          <Route path='/men' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"men"} />} />
          <Route path='/women' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"women"} />} />
          <Route path='/admin' render={routerProps => <AdminContainer {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;