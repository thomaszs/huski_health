import React, { Component } from 'react';

import Dashboard from './components/Dashboard';

import './css/keen-static.css';
import './css/timeline.css';
import './css/keen-dashboards.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        name: "Lexi"
      },
      pets: [
        {
          id: "1",
          name: "Leonard",
          birthday: "April 8, 2012",
          age: 6,
          weight: "22lbs",
          breed: "Egyptian Mau",
          owner: "Lexi",
          notes: "These are some notes about my fat cat named Leonard."
        }
      ]
    }
  }

  // set routing; based on this route render this
  // if user is logged in, render pets
  // if not, render log in route

  render() {
    return (
      < Dashboard pet={this.state.pets}/>
      // <  pet={this.state.pets}/>
    );
  }
}
export default App;
