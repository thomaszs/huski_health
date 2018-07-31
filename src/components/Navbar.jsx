import React, { Component } from 'react';
import mainLogo from '../huski-health.png'

export default function NavBar(props) {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <img src={mainLogo} style={{ height: "3em", float: "left", padding: "5px" }}/>
              <a className="navbar-brand" href="./" >HuskiHealth</a>
            {/* <div className="navbar-collapse collapse"> */}
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a href="https://keen.io">Home</a>
                </li>
                <li>
                  <a href="https://keen.io/team">Team</a>
                </li>
              </ul>
              <button className="btn btn-sm btn-warning" style={{ float: "right", marginTop: "8px" }}>SignUp</button>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

