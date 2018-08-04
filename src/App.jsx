import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, Switch , Redirect} from "react-router-dom";
import Cookies from 'universal-cookie';

import Dashboard from './components/Dashboard';
import Pets from './components/Pets';
import NavBar from './components/NavBar';
import PetProfile from './components/PetProfile';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Activity from './components/Activity';
import NewPetForm from './components/NewPetForm';
import FileUpload from './components/FileUpload';
import Vets from './components/Vets'


import './css/homepage.css';
import './css/keen-static.css';
import './css/timeline.css';
import './css/keen-dashboards.css';
import './css/daypicker.css';
const cookies = new Cookies();



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
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
    this.renderMergedProps = this.renderMergedProps.bind(this);
    this.PropsRoute = this.PropsRoute.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.editPetInfo = this.editPetInfo.bind(this);
    this.addNewPetRender = this.addNewPetRender.bind(this) ;
    this.setUser = this.setUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  async updateUser(user) {
  await this.setState({currentUser: user})  
   $.ajax(`http://localhost:8080/api/pets/${user.id}`, {
    method: 'GET',
    success: (result) => {
      console.log("Yes, it worked");
      this.setState({pets: result})
      console.log(this.state.pets)
    },
    error: function(err) {
      console.log("It doesnt work")
      }
  });
}

    setUser(cookieId) {
     $.ajax(`http://localhost:8080/api/user/${cookieId}`, {
      method: 'GET',
      success: (result) => {
        console.log("Yes, it worked");
        let user = result[0]
        this.updateUser(user)
      },
      error: function(err) {
        console.log("It doesnt work")
        }
    });
  }
  

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
    $.ajax(`http://localhost:8080/api/pets/${this.state.currentUser.id}`, {
      method: 'GET',
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
    $.ajax(`http://localhost:8080/api/pets/${this.state.currentUser.id}`, {
      method: 'GET',
      success: (result) => {
        this.setState({pets: result})
        console.log("New Pet State after edit:", this.state.pets)
      },
      error: function(err) {
        console.log("Cannot reset state of pets after edit")
        }
    })
  }

  logout() {
    // cookies.remove('hh')
    this.setState({currentUser: ''})
  }

  componentWillMount() {
    console.log("WILL UPDATE")
    this.setUser(cookies.get('hh'))
  }

  // set routing; based on this route render this
  // if user is logged in, render pets
  // if not, render log in route

  render() {
    if (!this.state.currentUser.id) {
      return (
        <div>
        <Router>
          <div>
            <NavBar currentUser={this.state.currentUser} logout={this.logout}/>
            <Switch>
            <this.PropsRoute exact path="/" component={Homepage}/>
            <this.PropsRoute exact path="/signup" component={SignUp} updateUser={this.updateUser}/>
            <this.PropsRoute exact path="/login" component={Login} setUser={this.setUser}/>
            <this.PropsRoute exact path="/pets" component={Homepage} pets={this.state.pets} />
            <this.PropsRoute exact path="/pets/new" component={Homepage} addNewPetRender={this.addNewPetRender}/>
            <this.PropsRoute exact path='/pet/:id' component={Homepage} />
            </Switch>
        </div>
        </Router>
        </div>
      )
    } else {
    return (
      <div>
      <Router>
        <div>
          <NavBar currentUser={this.state.currentUser} logout={this.logout}/>
          <Switch>
          <this.PropsRoute exact path="/signup" component={SignUp} setUser={this.setUser}/>
          <this.PropsRoute exact path="/files" component={FileUpload} setUser={this.setUser}/>
          <this.PropsRoute exact path="/login" component={Login} setUser={this.setUser}/>
          <this.PropsRoute exact path="/pets" component={Pets} pets={this.state.pets}  />
          <this.PropsRoute exact path="/pets/new" component={NewPetForm} addNewPetRender={this.addNewPetRender} />
          <this.PropsRoute exact path="/" component={Pets} pets={this.state.pets}  />
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
    }

export default App;
