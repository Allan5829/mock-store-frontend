import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import history from '../history';

import ProductAndFilterContainer from './PAndFContainer'
import Home from '../components/HomeComponent'

class NavContainer extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Link onClick={() => this.props.switchAdmin()} to={`/admin`}> Admin Switch </Link>
          <NavBar />
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"men"} />} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"women"} />} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"top"} />} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"bottom"} />} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={"accessory"} />} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;