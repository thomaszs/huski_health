import React, { Component } from 'react';
import mainLogo from '../huski-health.png'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function NavBar(props) {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
            <Link to={`/`}><img alt="huski-health-logo" src={mainLogo} style={{ height: "3em", float: "left", paddingTop: "8px" }}/></Link>
              <Link to={`/`} className="navbar-brand" style={{marginLeft:"5px"}}>HuskiHealth</Link>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>             
                <Link to={`/pets`} >Home</Link>
                </li>
                <li>
                  <Link to={'/vets'}> Find A Vet </Link>
                  </li>
              </ul>
              <Link to={`/signup`}><button className="btn btn-sm btn-warning" style={{ float: "right", marginTop: "10px" }}>Sign Up</button></Link>
            </div>
        </div>
      </div>
    </div>
  );
}

