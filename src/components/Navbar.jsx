import React, { Component } from 'react';
import mainLogo from '../huski-health.png'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function NavBar(props) {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          {/* <div className="navbar-header"> */}
            <img alt="huski-health-logo" src={mainLogo} style={{ height: "3em", float: "left", padding: "5px" }}/>
              <a className="navbar-brand" href="./" style={{marginTop:"0.25em", marginLeft:"5px"}}>HuskiHealth</a>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a style={{lineHeight: "0.6em"}} href="localhost:3000">Home</a>
                </li>
                <li>
                  <a style={{lineHeight: "0.6em"}} href="localhost:3000">Team</a>
                </li>
              </ul>
              <button className="btn btn-sm btn-warning" style={{ float: "right", marginTop: "10px" }}><Link to={`/signup`}>Sign Up</Link></button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

