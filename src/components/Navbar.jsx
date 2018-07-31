import React, { Component } from 'react';


export default function NavBar(props) {
  return (
    <div>
      <div id="navbar" className="navbar navbar-inverse navbar-fixed-top" role="navigation" >
        <div className="container-fluid" style={{ backgroundColor:"#003399"}}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="../">
              <span className="glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className="navbar-brand" href="./">HuskiHealth &raquo; </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-left">
              <li>
                <a href="http://localhost:3000/">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

