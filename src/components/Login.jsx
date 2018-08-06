import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.userLogin = this.userLogin.bind(this)
    }


    onChangeEmail(event) {
        event.preventDefault()
        this.setState({ email: event.target.value })
      }

    onChangePassword(event) {
        event.preventDefault()
        this.setState({ password: event.target.value })
      }

    async userLogin(event) {
        const cookies = new Cookies();
        if (this.state.password && this.state.email) {
            event.preventDefault();
            $.ajax(`http://localhost:8080/api/login`, {
                method: 'POST',
                data: {
                    email: this.state.email,
                    password: this.state.password
                },
                success: (result) => {
                    if (result === 'no user found') {
                        alert("No user found")
                     } else {
                    console.log("Yes, it worked");
                    let user = result[0];
                    cookies.set('hh', user.id, { path: '/' });
                    let userId = cookies.get('hh')
                    this.props.setUser(userId);
                    this.props.history.push('/pets')
                     }
                },
                error: function (err) {}
            });
        } else {
            alert("Please make sure all fields are filled out")
        }
    }

    render() {
        return (
            <div>
                <div className="container-main">
                    <div className="color-overlay"></div>
                    <form className="sign-up-form">
                    <h2>Login</h2>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input onChange={this.onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input onChange={this.onChangePassword} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button onClick={this.userLogin} type="submit" className="btn btn-primary">Submit</button>
                        <Link to={`/`} style={{float: "right"}}>Back</Link>
                    </form>
                </div>
            </div>
        )

    }
}