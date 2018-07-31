import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default class ActivityItem extends Component {
  constructor(props) {
    super(props)
  }

  render(){
      return(
        <div className="timeline__box">
        <div className="timeline__date">
          {/* <span className="timeline__day">{this.props.date}</span> */}Date
        </div>
        <div className="timeline__post">
          <div className="timeline__content">
            {/* <p>{this.props.post}</p> */}Some post information
          </div>
        </div>
      </div>
      )
  }
}