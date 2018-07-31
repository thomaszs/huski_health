import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class SignUp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container-main">
                    <div className="color-overlay"></div>
                    <form className="sign-up-form">
                     <div className="form-group">
                       <label for="exampleInputEmail1">Email address</label>
                       <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>
                     <div className="form-group">
                       <label for="exampleInputPassword1">Password</label>
                       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                     </div>
                     <div className="form-group">
                       <label for="exampleInputPassword1">Confirm Password</label>
                       <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                     <Link to={`/`} style={{float: "right"}}>back</Link>
                    </form>
                </div>
            </div>
            )

    }
}