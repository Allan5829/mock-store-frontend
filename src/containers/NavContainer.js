import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import history from '../history';

import ProductsContainer from './ProductsContainer'
import Home from '../components/HomeComponent'

import TempContainer from './TempContainer'

class NavContainer extends Component {

  state ={
    filterTerm: "none"
  }

  handleClick = filter => {
    this.setState({
      filterTerm: filter
    })
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar handleClick={this.handleClick} switchAdmin={this.props.switchAdmin}/>
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={routerProps => <ProductsContainer {...routerProps} filterTerm={this.state.filterTerm}/>} />
          {/* test path */}
          <Route path='/products_men' render={routerProps => <TempContainer {...routerProps} filterTerm={this.state.filterTerm}/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;