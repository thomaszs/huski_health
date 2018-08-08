import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import FileUpload from './FileUpload';
import '../css/images.css';

export default class Records extends Component {
  constructor(props) {
    super(props)
    this.state = { images: [] }
    this.retrieveImages = this.retrieveImages.bind(this);
  }

    retrieveImages() {
        axios.get(`http://localhost:8080/api/images/${this.props.match.params.id}`)
    .then((response) => {
       this.setState({images: response.data})
     }).catch((error) => {
        console.log(error);
      })
    }

  componentDidMount() {
    this.retrieveImages();
  }

  render() {
    if (this.state.images.length) {
      const images = this.state.images.map((image) => {
        return (
          <div className="col-sm-6">
            <div className="chart-wrapper">
              <div className="chart-title">
                <h3>{image.name}</h3>
              </div>
              <div className="chart-stage" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <img className="card-img-top responsive" style={{ width: "100%" }} src={`http://localhost:8080/${image.filepath}`} />
              </div>
            </div>
            <div className="row">
            <br />
            </div>
          </div>
        )
      })
      return (
        <div className="container">
          <div>
            <FileUpload petid={this.props.match.params.id} retrieveImages={this.retrieveImages} />
          </div>
          <div className="row">
            {images}
          </div>
        </div>
      )
    } else {
      return (
        <div className="container">
          <FileUpload petid={this.props.match.params.id} retrieveImages={this.retrieveImages} />
        </div>
      )
    }
  }
}