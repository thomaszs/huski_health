import React, { Component } from 'react';
import { Link } from "react-router-dom";


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
                        <Link to={`/login`}><button type="button" className="btn btn-warning">Login</button></Link>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage;