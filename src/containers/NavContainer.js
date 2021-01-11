import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';

import ProductAndFilterContainer from './PAndFContainer'
import Home from '../components/HomeComponent'

class NavContainer extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={() => <ProductAndFilterContainer/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;