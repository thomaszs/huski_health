import React, { Component } from 'react';
import mainLogo from '../huski-health.png'



export default function NavBar(props) {
  return (
    <div>
      <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <img src={mainLogo} style={{ height: "3em", float: "left", padding: "5px" }}/>
              <a className="navbar-brand" href="./" style={{marginTop:"0.25em", marginLeft:"5px"}}>HuskiHealth</a>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <a style={{lineHeight: "0.6em"}} href="http://localhost:3000">Home</a>
                </li>
                {/* <li>
                  <a style={{lineHeight: "0.6em"}} href="https://keen.io/team">Team</a>
                </li> */}
              </ul>
              <button className="btn btn-sm btn-warning" style={{ float: "right", marginTop: "10px" }}>Signout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

