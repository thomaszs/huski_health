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
import Vets from './components/Vets'


import './css/homepage.css';
import './css/keen-static.css';
import './css/timeline.css';
import './css/keen-dashboards.css';
import './css/daypicker.css';



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
    this.editPetInfo = this.editPetInfo.bind(this)
    this.addNewPetRender = this.addNewPetRender.bind(this)
    
  }

  componentDidMount() {

      $.ajax('http://localhost:8080/api/pets/', {
        method: 'POST',
        data: {
          userId: 1, 
        }, 
        success: (result) => {
          // console.log(result); 
          this.setState({pets: result})
          console.log(this.state.pets)
        },
        error: function(err) {
          console.log("It doesnt work")
          }
      });

  }
  // updatePet(result) {
  //   let items = this.state.pets;
  //   items[0].name = result.newPetName;
  //   items[0].weight = result.newPetWeight;
  //   items[0].breed = result.newPetBreed;
  //   this.setState({items});
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
  
  //Given that editPetProfile Button has been triggered, make ajax call for new pets info and set the state
  editPetInfo() {
    console.log("calling editPetInfo function to set new pet info state")
    $.ajax('http://localhost:8080/api/pets/', {
      method: 'POST',
      data: {
        userId: 1, 
      }, 
      success: (result) => {
        this.setState({pets: result})
        console.log("New Pet State after edit:",this.state.pets)
      },
      error: function(err) {
        console.log("Cannot reset state of pets after edit")
        }
    })
  }
  // TESTING GIT COMMIT 
  addNewPetRender() {
    console.log("calling editPetInfo function to set new pet info state")
    $.ajax('http://localhost:8080/api/pets/', {
      method: 'POST',
      data: {
        userId: 1, 
      }, 
      success: (result) => {
        this.setState({pets: result})
        console.log("New Pet State after edit:",this.state.pets)
      },
      error: function(err) {
        console.log("Cannot reset state of pets after edit")
        }
    })
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
          <this.PropsRoute exact path="/signup" component={SignUp}/>
          <this.PropsRoute exact path="/login" component={Login}/>
          <this.PropsRoute exact path="/pets" component={Pets} pets={this.state.pets} />
          <this.PropsRoute exact path="/pets/new" component={NewPetForm} addNewPetRender={this.addNewPetRender} />
          {/* <this.PropsRoute exact path='/pet/:id/profile' component={PetProfile} pets={this.state.pets}/> */}
          {/* <this.PropsRoute exact path='/pet/:id/dashboard' component={Dashboard} pets={this.state.pets}/> */}
          <this.PropsRoute exact path="/" component={Pets} pets={this.state.pets}  />
          {/* <this.PropsRoute exact path='/pet/:id/profile' component={PetProfile} updatePet={this.updatePet}/> */}
          <this.PropsRoute exact path='/pet/:id' component={Dashboard} updatePet={this.updatePet} editPetInfo={this.editPetInfo}/>
          {/* <this.PropsRoute exact path='/pet/:id/activity' component={Activity} /> */}
          <this.PropsRoute exact path='/vets' component={Vets}/>
          </Switch>
      </div>
      </Router>
      </div>
    )
  }
}
export default App;
