import React, { Component } from 'react';
import axios from 'axios'
import { Document, Page } from 'react-pdf';
 
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
    // console.log(this.uploadInput)
    console.log("PET ID", this.props.petid)
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    data.append('petid', this.props.petid)
    console.log("TESTING",this.uploadInput.files[0])
    axios.post('http://localhost:8080/api/uploadpdf', data) 
      // petid: this.props.petid
  .then((response) => {
          console.log(response.data)
          this.props.retrieveFiles()
        // this.setState({pdf: `http://localhost:8080/${response.data.file}`})
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // onDocumentLoad = ({ numPages }) => {
  //   this.setState({ numPages });
  // }

  // onClickNextPage(event) {
  //   let nextPage = this.state.pageNumber + 1;
  //   this.setState({pageNumber:  nextPage});
  // }
 
  render() {
    // const { pageNumber, numPages } = this.state;
    return (
        // <div>
        <div className="container">
        <form onSubmit={this.handleUploadPdf}>
        <div className="form-group">
          <input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
        </div>
        <div className="form-group">
          <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
        </div>
        <button className="btn btn-success" type>Upload</button>
      </form>
      </div>
        /* <Document
          file={this.state.pdf}
          onLoadSuccess={this.onDocumentLoad}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        </div> */
    )
  }
}