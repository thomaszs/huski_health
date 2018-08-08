import React, { Component } from 'react';
import mainLogo from '../huski-health.png'
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();



export default class NavBar extends Component {
  constructor(props) {
    super(props)

    this.onClickLogout = this.onClickLogout.bind(this)
    this.buttons = this.buttons.bind(this)
  }

  onClickLogout(event) {
    event.preventDefault()
    cookies.remove('hh', { path: '/' });
    this.props.logout()
  }

  buttons = function () {
    if (cookies.get('hh')) {
      return <button
        onClick={this.onClickLogout}
        className="btn btn-sm btn-warning" 
        style={{ float: "right", marginTop: "10px" }}
        >Logout</button>
    } else {
      return <Link to={`/signup`}><button 
      className="btn btn-sm btn-warning" 
      style={{ float: "right", marginTop: "10px" }}
      >
      Sign Up</button></Link>
    }
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <Link to={`/`}><img alt="huski-health-logo" src={mainLogo} style={{ height: "3em", float: "left", paddingTop: "8px" }} /></Link>
            <Link to={`/`} className="navbar-brand" style={{ marginLeft: "5px" }}>HuskiHealth</Link>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-left">
                <li>
                  <Link to={`/pets`} >Home</Link>
                </li>
                <li>
                  <Link to={'/vets'}> Find A Vet </Link>
                </li>
              </ul>
              {this.buttons()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

