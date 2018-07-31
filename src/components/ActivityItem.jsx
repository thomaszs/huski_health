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
          <span className="timeline__day">Date</span>
          {/* <span className="timeline__month">Jun</span> */}
          {/* <span className="timeline__year">2013</span> */}
        </div>
        <div className="timeline__post">
          <div className="timeline__content">
            <p>Went for a 30 minute run but Leonard refused to jog so I ended up carrying him</p>
          </div>
        </div>
      </div>
      )
  }
}