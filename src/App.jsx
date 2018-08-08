import React, { Component } from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookies from 'universal-cookie';
import Dashboard from './components/Dashboard';
import Pets from './components/Pets';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp'
import Login from './components/Login'
import Activity from './components/Activity';
import NewPetForm from './components/NewPetForm';
import FileUpload from './components/FileUpload';
import PdfUpload from './components/PdfUpload';
import Vets from './components/Vets'
import Records from './components/Records'
import Record from './components/Record'
import Images from './components/Images'


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
          id: "",
          name: "",
          birthday: "",
          age: 6,
          weight: "",
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
      this.setState({pets: result})
    },
    error: function(err) {
      console.log(err);
      }
  });
}

    setUser(cookieId) {
     $.ajax(`http://localhost:8080/api/user/${cookieId}`, {
      method: 'GET',
      success: (result) => {
    
        let user = result[0]
        this.updateUser(user)
      },
      error: function(err) {
        console.log(err)
        }
    });
  }

  componentDidMount() {
  this.getLatestPetWeight();
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
      },
      error: function(err) {
        console.log(err)
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
      },
      error: function(err) {
        console.log(err)
        }
    })
  }

  getPetWeight(newPetWeight, petid) {
    let pets = this.state.pets;
    
    pets.forEach(function(pet) {
      if (pet.id === petid) {
        return pet.weight = newPetWeight
      }
    })
    this.setState({pets: pets})
  }

  getLatestPetWeight(){
    let pet = this.state.pets[0];
    $.get(`http://localhost:8080/api/pets/${ pet.id }/latestweights`)
    .then(data => {
      if (data[0] === undefined) {
        return
      }
      return pet.weight = data[0].notes;
    })
    .catch(err => {
      console.log(err)
    });
    
    this.setState({pets: pet})
  }

  logout() {
    this.setState({currentUser: ''})
  }

  componentWillMount() {
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
            <this.PropsRoute exact path="/signup" component={SignUp} setUser={this.setUser}/>
            <this.PropsRoute exact path="/login" component={Login} setUser={this.setUser}/>
            <this.PropsRoute exact path="/records/:id" component={Homepage} />
            <this.PropsRoute exact path="/record/:id" component={Homepage} />
            <this.PropsRoute exact path="/pets" component={Homepage} pets={this.state.pets} />
            <this.PropsRoute exact path="/pets/new" component={Homepage} addNewPetRender={this.addNewPetRender}/>
            <this.PropsRoute exact path='/pet/:id' component={Homepage} />
            <this.PropsRoute exact path='/vets' component={Homepage}/>
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
          <this.PropsRoute exact path="/records/:id" component={Records} />
          <this.PropsRoute exact path="/record/:id" component={Record} />
          <this.PropsRoute exact path="/images/:id" component={Images} />
          <this.PropsRoute exact path="/login" component={Login} setUser={this.setUser}/>
          <this.PropsRoute exact path="/pets" component={Pets} pets={this.state.pets} currentUser={this.state.currentUser} />
          <this.PropsRoute exact path="/pets/new" component={NewPetForm} addNewPetRender={this.addNewPetRender} currentUser={this.state.currentUser} />
          <this.PropsRoute exact path="/" component={Pets} pets={this.state.pets}  />
          <this.PropsRoute exact path='/pet/:id' component={Dashboard} getLatestPetWeight={this.getLatestPetWeight} updatePet={this.updatePet} editPetInfo={this.editPetInfo}/>
          <this.PropsRoute exact path='/pet/:id/activity' component={Activity} />
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
