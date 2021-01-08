import './App.css';
import React, { Component } from 'react'
import ProductsContainer from './containers/ProductsContainer'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2> test </h2>
        </header>
        < ProductsContainer />
      </div>
    );
  }   
}

export default App
