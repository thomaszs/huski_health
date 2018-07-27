import React, {Component} from 'react';

export default function Navbar(props){
  return (
    <div className="App">
    <body id="dashboard-body" className="keen-dashboard">
        <div id="root">
          <div id="navbar" className="navbar navbar-inverse navbar-fixed-top" role="navigation" style={{backgroundColor: "#003399"}}>
            <div className="container-fluid">
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
                    <a href="/">Home</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
);
}

