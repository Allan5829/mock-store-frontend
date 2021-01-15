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
          <Route path='/men' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"men"} />} />
          <Route path='/women' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"women"} />} />
          <Route path='/top' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"top"} />} />
          <Route path='/bottom' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"bottom"} />} />
          <Route path='/accessory' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"accessory"} />} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;