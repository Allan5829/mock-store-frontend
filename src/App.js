import './cssFolder/App.css';
import React, { Component } from 'react'
import NavContainer from './containers/NavContainer'
import AdminNavContainer from './containers/AdminNavContainer'

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
          <h2> Mock Store </h2>
        </header>
        <div className="app-body"> 
          {this.state.admin ? <AdminNavContainer switchAdmin={this.switchAdmin}/> : <NavContainer switchAdmin={this.switchAdmin}/>}
        </div>
      </div>
    )
  }
  
}

export default App
