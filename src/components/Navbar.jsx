import React, { Component } from 'react';
import mainLogo from '../huski-health.png'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function NavBar(props) {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
            <img alt="huski-health-logo" src={mainLogo} style={{ height: "3em", float: "left", padding: "5px" }}/>
              <a className="navbar-brand" style={{marginTop:"0.25em", marginLeft:"5px"}}><Link to={`/`}>HuskiHealth</Link></a>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>             
                  <a style={{lineHeight: "0.6em"}} href="http://localhost:3000/">Home</a>
                </li>
                <li>
                  <a style={{lineHeight: "0.6em"}} href="localhost:3000">Team</a>
                </li>
              </ul>
              <Link to={`/signup`}><button className="btn btn-sm btn-warning" style={{ float: "right", marginTop: "10px" }}>Sign Up</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

