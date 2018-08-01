import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PetProfile from './PetProfile'
import Dashboard from './Dashboard'
import Activity from './Activity';

export default class PetCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false
    };
    this.togglePopup = this.togglePopup.bind(this)
  }
  togglePopup() {
    this.setState({
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
                  <button className="btn btn-primary" href="#">Feed Me</button>
                  <button onClick={this.togglePopup.bind(this)} className="btn btn-primary" href="#" style={{ float: "right" }}>Log Activity</button>
                </div>
                {/* <Link to={`/pet/${this.props.pet.id}/profile`}>Profile</Link> */}
              </div>
            </div>
          </div>
          {this.state.showPopup ?
            <Activity text='Close Me' closePopup={this.togglePopup.bind(this)} />
            : null
          }
        </div>

        )
      }
      }
    
