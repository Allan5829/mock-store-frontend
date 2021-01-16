import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import history from '../history';

import ProductAndFilterContainer from './PAndFContainer'
import Home from '../components/HomeComponent'

class NavContainer extends Component {

  state ={
    filterTerm: "none"
  }

  handleClick = (event) => {
    console.log(event.target.innerText)
    this.setState({
      filterTerm: event.target.innerText
    })
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Link onClick={() => this.props.switchAdmin()} to={`/admin`}> Admin Switch </Link>
          <NavBar handleClick={this.handleClick} />
          <Route exact path="/" render={() => <Home/>} />
          <Route path='/products' render={routerProps => <ProductAndFilterContainer {...routerProps} filterTerm={this.state.filterTerm}/>} />
        </div>
      </Router>
    );
  }
}

export default NavContainer;