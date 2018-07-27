import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body id="dashboard-body" className="keen-dashboard">
          <div id="root">
            <Dashboard/>
        </div>
      </body>
    </div>
    );
  }
}

export default App;
