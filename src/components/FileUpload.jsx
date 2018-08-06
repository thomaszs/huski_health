import React, { Component } from "react";
// import $ from "jquery";
import axios from 'axios';

export default class FileUpload extends Component {
constructor(props) {
    super(props)
    this.state = {imageURL: null,
    uploadStatus: false}
    this.handleUploadImage = this.handleUploadImage.bind(this)
}

handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    axios.post('http://localhost:8080/api/upload', data)
      .then(function (response) {
          console.log(response)
          console.log(response.data)
    this.setState({ imageURL: `http://localhost:8080/${response.data.file}`, uploadStatus: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
   
   render() {
     return(
       <div class="container">
         <form onSubmit={this.handleUploadImage}>
           <div className="form-group">
             <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
           </div>
 
           <div className="form-group">
             <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
           </div>
           <button className="btn btn-success" type>Upload</button>
           <div>
           <img className="card-img-top responsive" style={{ width: "100%" }} src={this.state.imageURL} alt="uploaded file"/>
         </div>
         </form>
       </div>
     )
   }
 }