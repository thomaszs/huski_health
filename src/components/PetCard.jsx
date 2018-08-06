import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import PetProfile from './PetProfile'
// import Dashboard from './Dashboard'
import Event from './Activity';
// import $ from 'jquery'; 
import axios from 'axios'
 
export default class PetCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      type: "",
      weights: [{}]
    };

    this.togglePopup = this.togglePopup.bind(this)
    this.onClickTypeActivity = this.onClickTypeActivity.bind(this)
    this.onClickTypeFeeding = this.onClickTypeFeeding.bind(this)
    this.onClickTypeWeight = this.onClickTypeWeight.bind(this)
    this.fetchData = this.fetchData.bind(this)

  }

  componentDidMount(){
    this.fetchData();
  }
  fetchData(){
    axios.get(`http://localhost:8080/api/pets/${this.props.pet.id}/weights/`, {userId: 2}) 
      .then(response => {
        console.log('----',response);
        this.setState( { weights: response.data })
      })
      .catch(error => {
        console.log(error);
      });
}
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onClickTypeActivity() {
    console.log("CLICKED")
    this.setState({
      type: "Activity",
      showPopup: !this.state.showPopup
    });
  }

  onClickTypeFeeding() {
    console.log("CLICKED")
    this.setState({
      type: "Feeding",
      showPopup: !this.state.showPopup
    });
  }

  onClickTypeWeight() {
    console.log("CLICKED")
    this.setState({
      type: "Weight",
      showPopup: !this.state.showPopup
    });
  }

  

  render() {
    return (
                  
      <div className="col-sm-4">
        <div className="chart-wrapper">
          <div className="chart-title">
            <Link to={`/pet/${this.props.pet.id}`} weight={this.state.weights}><h1>{this.props.pet.name}</h1></Link>
          </div>
          <div className="chart-stage">
            <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top responsive" style={{ width: "100%", objectFit:"cover" }} src={this.props.pet.img}
                alt="Card cap" ></img>
              <div className="card-body">
              </div>
              <div className="container-profile" style={{ padding: "10px" }}>
                  {/* <div className="container-row">
                    <p>Pet Weightz: </p>
                    <p>{this.state.weights.length ? this.state.weights[0].notes : 'no weights'}</p>
                  </div>
                  <div className="container-row">
                    <p>Last Fed: </p>
                    <p>{this.props.pet}</p>
                  </div>
                  <div className="container-row">
                    <p>Last Active: </p>
                    <p>Date of last activity</p>
                  </div> */}
                  </div>
                <div className="card-body-buttons">
                  <button  onClick={this.onClickTypeFeeding}   className="btn btn-warning" href="#">Feed Me</button>
                  <button  onClick={this.onClickTypeWeight}   className="btn btn-activity" href="#">Update Weight</button>
                  <Link to={`/records/${this.props.pet.id}`} style={{float: "right"}}>Records</Link>
                </div>
              </div>
            </div>
          </div>
          {this.state.showPopup ? 
          <Event
            text='Close Me'
            type={this.state.type}
            pet={this.props.pet}
            closePopup={this.togglePopup.bind(this)}
            onNewActivity={this.onNewActivity}
          />
          : null
          }
        </div>

        )
      }
      }
    
