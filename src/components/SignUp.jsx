import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.saveAccount = this.saveAccount.bind(this);
    }

    onChangeEmail(event) {
        event.preventDefault()
        this.setState({ email: event.target.value })
      }

      onChangeName(event) {
        event.preventDefault()
        this.setState({ name: event.target.value })
      }

      onChangePassword(event) {
        event.preventDefault()
        this.setState({ password: event.target.value })
      }

      onChangeConfirmPassword(event) {
        event.preventDefault()
        this.setState({ confirmPassword: event.target.value })
      }


    saveAccount(event) {
      const cookies = new Cookies();
        if (this.state.password === this.state.confirmPassword && this.state.name && this.state.password && this.state.email) {
        event.preventDefault();
        $.ajax(`http://localhost:8080/api/signup`, {
          method: 'POST',
          data: {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
          },
          success: (result) => {
              if (result === 'already found') {
                  alert("Account already created, please login")
              } else {
            let user = result[0]
            cookies.set('hh', user.id, { path: '/' });
            let userId = cookies.get('hh')
            this.props.setUser(userId);
            this.props.history.push('/pets')
              }
          },
          error: function (err) {
          }
        });
    } else {
        alert("Please make sure all fields are filled out and that Password matches Confirm Password")
    }
      }

    render() {
        return (
            <div>
                <div className="container-main">
                    <div className="color-overlay"></div>
                    <form className="sign-up-form">
                    <h2>Sign Up</h2>
                    <div className="form-group">
                       <label for="exampleInputName1">Name</label>
                       <input onChange={this.onChangeName} type="name" className="form-control" id="exampleInputName1" placeholder="Enter name"/>
                     </div>
                     <div className="form-group">
                       <label for="exampleInputEmail1">Email address</label>
                       <input onChange={this.onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>
                     <div className="form-group">
                       <label for="exampleInputPassword1">Password</label>
                       <input onChange={this.onChangePassword}  type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                     </div>
                     <div className="form-group">
                       <label for="exampleInputPassword1">Confirm Password</label>
                       <input onChange={this.onChangeConfirmPassword} type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"/>
                     </div>
                     <button onClick={this.saveAccount} type="submit" className="btn btn-primary">Submit</button>
                     <Link to={`/`} style={{float: "right"}}>Back</Link>
                    </form>
                </div>
            </div>
            )
    }
}