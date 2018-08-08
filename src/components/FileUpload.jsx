import React, { Component } from "react";
import axios from 'axios';

export default class FileUpload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: null,
      uploadStatus: false
    }
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    data.append('petid', this.props.petid);
    axios.post('http://localhost:8080/api/uploadimage', data)
      .then((response) => {
        this.props.retrieveImages()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Images</h1>
        <div className="container">
          <div className="chart-wrapper" style={{ marginTop: "20px", padding: "15px" }}>
            <div className="chart-stage">
              <form onSubmit={this.handleUploadImage}>
                <div className="form-group">
                  <input className="form-control" ref={(ref) => { this.uploadInput = ref; }} type="file" />
                </div>
                <div className="form-group">
                  <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
                </div>
                <button className="btn btn-success">Upload</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}