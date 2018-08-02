import React, { Component } from "react";
import $ from "jquery";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import PetProfile from "./PetProfile.jsx";
import Timeline from "./Timeline.jsx";
import PetChart from "./PetChart.jsx";
import StatusBar from "./StatusBar.jsx";
import NewPetForm from "./NewPetForm.jsx";

// import PetActivity from 'PetActivity.jsx';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.onNewActivity = this.onNewActivity.bind(this)
  }

  componentDidMount() {
    $.ajax("http://localhost:8080/api/pet/", {
      method: "POST",
      data: {
        id: this.props.match.params.id
      },
      success: result => {
        console.log("First, grab pet info.");
        this.setState({ pet: result[0] });
        $.ajax("http://localhost:8080/api/pets/activities", {
          method: "GET",
          data: {
            id: this.props.match.params.id
          },
          success: result => {
            this.setState({activities: result,loading:false})
            console.log("ADDING ACTIVITIES?", this.state.activities);
          },
          error: function(err) {
            console.log("Error, can not get pet activities upon intial load.");
          }
        });
      },
      error: function(err) {
        console.log("It doesnt work");
      }
    });
  }

  // Once user submits an activity, it should set the state of activities to the new state. 
  // oldActivityState + newActivity = newActityState
  onNewActivity() {
    $.ajax("http://localhost:8080/api/pets/activities", {
          method: "GET",
          data: {
            id: this.props.match.params.id
          },
          success: result => {
            this.setState({activities: result})
          },
          error: function(err) {
            console.log("Error, can not make ajax request to get new activity List");
          }
        })
   
  }

  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <PetProfile
                pet={this.state.pet}
                updatePet={this.updatePet}
                onChangePetName={this.onChangePetName}
                onChangePetWeight={this.onChangePetWeight}
                onChangePetBreed={this.onChangePetBreed}
              />
            </div>
            <div className="col-sm-9">
              <div className="col-sm-12 col-lg-8 ">
                <PetChart pet={this.state.pet}  />
                <Timeline pet={this.state.pet} activities={this.state.activities} onNewActivity={this.onNewActivity} />
              </div>
              <div className="col-med-4">
              <StatusBar pet={this.state.pet} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
