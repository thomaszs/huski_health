import React, { Component } from 'react';

export default function PetCard(props) {
    return (
      <div>
        <div className="col-sm-4">
          <div className="chart-wrapper">
            <div className="chart-title">
              <h1>{props.pet.name}</h1>
            </div>
            <div className="chart-stage">
              <div className="card" style={{ width: "100%" }}>
                <img className="card-img-top" style={{ width: "100%" }} src={props.pet.img}
                  alt="Card cap" ></img>
                <div className="card-body">
                  <p className="card-text">Pet Notes: {props.pet.notes}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Pet Weight: {props.pet.weight}</li>
                  <li className="list-group-item">Pet ID: {props.pet.id}</li>
                  <li className="list-group-item">Pet Owner: {props.pet.account_id}</li>
                </ul>
                <div className="card-body">
                  <button className="btn btn-primary" href="#">Feed Me</button>
                  <button className="btn btn-primary" href="#" style={{ float: "right" }}>Log Activity</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }