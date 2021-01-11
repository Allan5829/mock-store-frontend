import './cssFolder/App.css';
import React from 'react'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import NavBar from '../components/NavBar';
import NavContainer from './containers/NavContainer'

import ProductAndFilterContainer from './containers/PAndFContainer'
import Home from './components/HomeComponent'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h2> Website </h2>
    </header>
    <NavContainer/>  
  </div>
)

export default App
