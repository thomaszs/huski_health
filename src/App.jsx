import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Dashboard from './components/Dashboard';
import Pets from './components/Pets';
import NavBar from './components/NavBar';
import PetProfile from './components/PetProfile';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Activity from './components/Activity';
import NewPetForm from './components/NewPetForm';


import './css/homepage.css';
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
          weight: "22",
          breed: "Egyptian Mau",
          owner: "Lexi",
          notes: "These are some notes about my fat cat named Leonard."
        }
      ]
    }
    // this.updatePet = this.updatePet.bind(this);
    this.renderMergedProps = this.renderMergedProps.bind(this)
    this.PropsRoute = this.PropsRoute.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  async updateUser(user) {
  // console.log(user)
  await this.setState({currentUser: user})  
   $.ajax('http://localhost:8080/api/pets/', {
    method: 'POST',
    data: {
      userId: this.state.currentUser.id
    }, 
    success: (result) => {
      console.log("Yes, it worked");
      // console.log(result); 
      this.setState({pets: result})
      console.log(this.state.pets)
    },
    error: function(err) {
      console.log("It doesnt work")
      }
  });
}
  //  console.log(this.state.currentUser.id)
  

  // componentDidMount() {

  //   console.log(this.state.currentUser.id)
   
  //     $.ajax('http://localhost:8080/api/pets/', {
  //       method: 'POST',
  //       data: {
  //         userId: this.state.currentUser.id
  //       }, 
  //       success: (result) => {
  //         console.log("Yes, it worked");
  //         // console.log(result); 
  //         this.setState({pets: result})
  //         console.log(this.state.pets)
  //       },
  //       error: function(err) {
  //         console.log("It doesnt work")
  //         }
  //     });
  // }


  renderMergedProps(component, ...rest) {
    const finalProps = Object.assign({}, ...rest);
    return (
      React.createElement(component, finalProps)
    );
  }
  
  PropsRoute({ component, ...rest }) {
    return (
      <Route {...rest} render={routeProps => {
        return this.renderMergedProps(component, routeProps, rest);
      }}/>
    );
  }
  // set routing; based on this route render this
  // if user is logged in, render pets
  // if not, render log in route

  render() {
    return (
      <div>
      <Router>
        <div>
          <NavBar/>
          <Switch>
          <this.PropsRoute exact path="/" component={Homepage}/>
          <this.PropsRoute exact path="/signup" component={SignUp} updateUser={this.updateUser}/>
          <this.PropsRoute exact path="/login" component={Login} updateUser={this.updateUser}/>
          <this.PropsRoute exact path="/pets" component={Pets} pets={this.state.pets} />
          <this.PropsRoute exact path="/pets/new" component={NewPetForm} />
          {/* <this.PropsRoute exact path='/pet/:id/profile' component={PetProfile} pets={this.state.pets}/> */}
          {/* <this.PropsRoute exact path='/pet/:id/dashboard' component={Dashboard} pets={this.state.pets}/> */}
          {/* <this.PropsRoute exact path="/" component={Pets} pets={this.state.pets} /> */}
          {/* <this.PropsRoute exact path='/pet/:id/profile' component={PetProfile} updatePet={this.updatePet}/> */}
          <this.PropsRoute exact path='/pet/:id' component={Dashboard} />
          {/* <this.PropsRoute exact path='/pet/:id/activity' component={Activity} /> */}
          </Switch>
      </div>
      </Router>
      </div>
    )
  }
}
export default App;
