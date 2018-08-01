import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PetProfile from './PetProfile'
import Dashboard from './Dashboard'
import Event from './Activity';
import $ from 'jquery'; 
 
export default class PetCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      type: ""
    };

    this.togglePopup = this.togglePopup.bind(this)
    this.onClickTypeActivity = this.onClickTypeActivity.bind(this)
    this.onClickTypeFeeding = this.onClickTypeFeeding.bind(this)
    this.onClickTypeWeight = this.onClickTypeWeight.bind(this)

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
            <Link to={`/pet/${this.props.pet.id}`}><h1>{this.props.pet.name}</h1></Link>
          </div>
          <div className="chart-stage">
            <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top" style={{ width: "100%" }} src={this.props.pet.img}
                alt="Card cap" ></img>
              <div className="card-body">
              </div>
              <table className="table pet-card-table" style={{ padding: "10px" }}>
                <tbody>
                  <tr>
                    <td>Pet Weight: </td>
                    <td>{this.props.pet.weight}</td>
                  </tr>
                  <tr>
                    <td>Pet ID: </td>
                    <td>{this.props.pet.id}</td>
                  </tr>
                  <tr>
                    <td>Pet Owner: </td>
                    <td>{this.props.pet.account_id}</td>
                  </tr>
                  </tbody>
                  </table>
                <div className="card-body-buttons">
                  <button  onClick={this.onClickTypeFeeding}   className="btn btn-primary" href="#">Feed Me</button>
                  <button  onClick={this.onClickTypeWeight}   className="btn btn-primary" href="#">Update Weight</button>
                  <button  onClick={this.onClickTypeActivity} className="btn btn-primary" href="#" style={{ float: "right" }}>Log Activity</button>
                </div>
                {/* <Link to={`/pet/${this.props.pet.id}/profile`}>Profile</Link> */}
              </div>
            </div>
          </div>
          {this.state.showPopup ? 
          <Event text='Close Me' type={this.state.type} pet={this.props.pet} closePopup={this.togglePopup.bind(this)} onNewActivity={this.onNewActivity}/>
          : null
          }
        </div>

        )
      }
      }
    
