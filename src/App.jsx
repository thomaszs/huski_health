import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import StatusBar from './components/StatusBar'
import NewPetForm from './components/NewPetForm'

class App extends Component {
  render() {
    return (
      <div>
      <NewPetForm />
      </div>
    )
  }
}
export default App;
