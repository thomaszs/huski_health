import React, { Component } from 'react';

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
                        <h1 className="homepage">HuskiHealth</h1>
                        <button type="button" className="btn btn-warning">Login</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Homepage;