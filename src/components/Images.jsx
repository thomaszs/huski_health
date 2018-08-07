import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch , Redirect} from "react-router-dom";
import FileUpload from './FileUpload';

import '../css/images.css';
 
export default class Records extends Component {
constructor(props) {
    super(props)
    this.state = {images: []}
    this.retrieveImages = this.retrieveImages.bind(this);
}

    retrieveImages() {
        axios.get(`http://localhost:8080/api/images/${this.props.match.params.id}`)
    .then((response) => {
       console.log("Yes, it worked RECORDS");
       console.log(response.data)
       this.setState({images: response.data})
       console.log(this.state.images)
     }).catch((error) => {
         console.log(this.props.match.params.id)
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
                    <div className="column">
                    <h3>{image.name}</h3>
                        <img className="card-img-top responsive" style={{ width: "100%" }} src={`http://localhost:8080/${image.filepath}`}/>
                        </div>
                       )
                    })
        return (
          <div class="container">
            <div>
              <FileUpload petid={this.props.match.params.id} retrieveImages={this.retrieveImages}/>
            </div>
            <div className="row">
            {images}
            </div>
          </div>
        )
      } else {
          return (
            <div class="container">
              <FileUpload petid={this.props.match.params.id} retrieveImages={this.retrieveImages}/>
          </div>
          )
        }
}
}