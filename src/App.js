import './cssFolder/App.css';
import './cssFolder/ProductContainer.css';
import React, { Component } from 'react'
import ProductsContainer from './containers/ProductsContainer'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2> test </h2>
        </header>
        <div className="all-product"> 
          < ProductsContainer /> 
        </div>
        
      </div>
    );
  }   
}

export default App
