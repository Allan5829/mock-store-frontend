import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

import ProductAndFilterContainer from './PAndFContainer'
import Home from '../components/HomeComponent'
import AdminContainer from './AdminContainer'

class NavContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps}/>} />
          <Route path='/admin' render={routerProps => <AdminContainer {...routerProps}/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;