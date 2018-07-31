import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import PetProfile from './PetProfile'
// import Dashboard from './Dashboard'

export default class PetCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="col-sm-4">
          <div className="chart-wrapper">
            <div className="chart-title">
              <h1>{this.props.pet.name}</h1>
            </div>
            <div className="chart-stage">
              <div className="card" style={{ width: "100%" }}>
                <img className="card-img-top" style={{ width: "100%" }} src={this.props.pet.img}
                  alt="Card cap" ></img>
                <div className="card-body">
                  <p className="card-text">Pet Notes: {this.props.pet.notes}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Pet Weight: {this.props.pet.weight}</li>
                  <li className="list-group-item">Pet ID: {this.props.pet.id}</li>
                  <li className="list-group-item">Pet Owner: {this.props.pet.account_id}</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-primary" href="#">Feed Me</button>
                  <button className="btn btn-primary" href="#" style={{ float: "right" }}>Log Activity</button>
                </div>
                <Link to={`/pet/${this.props.pet.id}/profile`}>Profile</Link>
                <Link to={`/pet/${this.props.pet.id}/dashboard`}>Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
    )
  }
  }

