import './cssFolder/App.css';
import React from 'react'
import ProductAndFilterContainer from './containers/PAndFContainer'
import Home from './components/HomeComponent'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h2> Website </h2>
    </header>
    < Home />
    < ProductAndFilterContainer />   
  </div>
)

export default App
