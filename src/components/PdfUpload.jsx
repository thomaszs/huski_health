import React, { Component } from 'react';
import axios from 'axios'

 
export default class PdfUpload extends Component {
    constructor(props) {
    super(props)
  this.state = {
    pdf: null,
    numPages: null,
    pageNumber: 1,
  }
  this.handleUploadPdf = this.handleUploadPdf.bind(this)
}

  handleUploadPdf(ev) {
    ev.preventDefault();
    const data = new FormData();
    console.log("PET ID", this.props.petid)
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    data.append('petid', this.props.petid)
    console.log("TESTING",this.uploadInput.files[0])
    axios.post('http://localhost:8080/api/uploadpdf', data) 
  .then((response) => {
          console.log(response.data)
          this.props.retrieveFiles()
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  render() {
    return (
        <div className="container">
        <form onSubmit={this.handleUploadPdf}>
        <div className="form-group">
          <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div className="form-group">
          <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
        </div>
        <button className="btn btn-success">Upload</button>
      </form>
      </div>
    )
  }
}