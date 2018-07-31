import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import '../css/homepage.css'


class Homepage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="container-main">
                    <div className="color-overlay"></div>
                    <div className="hero-text">
                        <h1 id="homepage" className="homepage-h1">HuskiHealth</h1>
                        <button type="button" className="btn btn-warning"><Link to={`/login`}>Login</Link></button>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage;