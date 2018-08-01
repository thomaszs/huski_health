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
          },
          error: function(err) {
            console.log("Error, can not get pet activities");
          }
        });
      },
      error: function(err) {
        console.log("It doesnt work");
      }
    });

    console.log("MY PET ID", this.props.match.params.id);
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
              <div className="col-sm-8">
                <PetChart pet={this.state.pet} />
                <Timeline pet={this.state.pet} activities={this.state.activities} />
              </div>
              <StatusBar pet={this.state.pet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
withRouter(Dashboard);
export default Dashboard;
