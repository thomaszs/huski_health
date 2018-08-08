import React, { Component } from "react";
import $ from "jquery";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import PetProfile from "./PetProfile.jsx";
import Timeline from "./Timeline.jsx";
import PetChart from "./PetChart.jsx";
import StatusBar from "./StatusBar.jsx";
import ChatBot from 'react-simple-chatbot';
import Example from './ChatBot.jsx'
import NewPetForm from "./NewPetForm.jsx";

import axios from 'axios'
var map;
var service;
var infowindow;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      weights: [{}]
    };
    this.onNewActivity = this.onNewActivity.bind(this);
  };
  
  componentDidMount() {
    $.ajax("http://localhost:8080/api/pet/", {
      method: "POST",
      data: {
        id: this.props.match.params.id
      },
      success: result => {
        //call to get pet information
        this.setState({ pet: result[0] });
        $.ajax("http://localhost:8080/api/pets/activities", {
          method: "GET",
          data: {
            id: this.props.match.params.id
          },
          success: result => {
            this.setState({ activities: result, loading: false });
          },
          error: function (err) {
            console.log("Error, can not get pet activities upon intial load.");
          }
        });
      },
      error: function (err) {
      }
    })
  }
  componentDidUpdate() {
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
        this.setState({ activities: result });
      },
      error: function (err) {
        console.log(
          "Error, can not make ajax request to get new activity List"
        );
      }
    });
  }

  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <PetProfile
                pet={this.state.pet}
                updatePet={this.updatePet}
                onChangePetName={this.onChangePetName}
                onChangePetWeight={this.onChangePetWeight}
                onChangePetBreed={this.onChangePetBreed}
                editPetInfo={this.props.editPetInfo}
              />
            </div>
            <div className="col-sm-9 col-lg-6">
              <div>
                <PetChart pet={this.state.pet} getLatestPetWeight={this.props.getLatestPetWeight} />
                <Timeline
                  pet={this.state.pet}
                  activities={this.state.activities}
                  onNewActivity={this.onNewActivity}
                />
              </div>

            </div>
            <StatusBar
                pet={this.state.pet}
                activities={this.state.weights}
                active={this.state.activities}
                getLatestPetWeight={this.props.getLatestPetWeight}
                weight={this.props.weight} />
          </div>
        </div>
        <Example />
      </div>
    );
  }
}

withRouter(Dashboard);
export default Dashboard;
