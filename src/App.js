import './cssFolder/App.css';
import React, { Component } from 'react'
import NavContainer from './containers/NavContainer'
import AdminNavContainer from './containers/AdminNavContainer'
//import { button } from 'react-router-dom';

class App extends Component {

  state = {
    admin: false
  }

  switchAdmin = () => {
    let currentState = this.state.admin
    currentState ? currentState = false : currentState = true
    this.setState({
      admin: currentState
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h2> Website </h2>
        </header>
        {this.state.admin ? <AdminNavContainer switchAdmin={this.switchAdmin}/> : <NavContainer switchAdmin={this.switchAdmin}/>}
      </div>
    )
  }
  
}

export default App
