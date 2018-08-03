import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function ActivityItem(props) {
  return (
    <div className="timeline__box">
      <div className="timeline__date">
        {props.date.slice(0,10)}
      </div>
      <div className="timeline__post">
        <div className="timeline__content">
          {props.notes}<i class="fas fa-trash-alt" style={{float:"right"}}></i>
        </div>
      </div>
    </div>
  );
}