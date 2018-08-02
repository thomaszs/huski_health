import React, { Component } from 'react';
import moment from 'moment';

export default function StatusBar(props){
  // let lastActive = "No Activities";
  // if(props.activities.length > 0) {
  //   lastActive = props.activities[0].created_at.slice(0,10)
  // }

  const lastActive = (props.activities[0] && moment(props.activities[0].created_at).fromNow()) || "No Activites"

  return (
    <div>
  <div className="col-sm-4">
    <div className="chart-wrapper">
      <div className="chart-title">
        <h2>Current Weight</h2>
      </div>
      <div className="chart-stage" id="chart-05">
        <h1>{props.pet.weight} lbs <i class="fas fa-weight" style={{ float: "right"}}></i></h1>
      </div>
      <div className="chart-notes">
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="chart-wrapper">
      <div className="chart-title">
        <h2>Last Fed</h2>
      </div>
      <div className="chart-stage" id="chart-01">
        <h1>8:00am <i className="fas fa-clock" style={{ float: "right"}}></i></h1>
      </div>
      <div className="chart-notes">
        July 25, 2018
    </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="chart-wrapper">
      <div className="chart-title">
        <h2>Last Active</h2>
      </div>
      <div className="chart-stage" id="chart-02">
      
        <h1>{lastActive}<i className="fas fa-dumbbell" style={{ float: "right"}}></i></h1>
      </div>
      <div className="chart-notes">
        Notes about this chart
    </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="chart-wrapper">
      <div className="chart-title">
        <h2>Did you know...</h2>
      </div>
      <div className="chart-stage" id="chart-03">
        <p>Frequencies of 20 to 50 Hertz are helpful in speeding the healing process of bone injuries. Cat's purr vibrations
          which range from 20 – 140 Hertz, can help heal soft tissue injuries to ligaments, tendons and muscles.
      </p>
      </div>
      <div className="chart-notes">
      </div>
    </div>
  </div>
  </div>
);
}
