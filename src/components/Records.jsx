import React, { Component } from 'react';
import axios from 'axios';
// import { Document, Page } from 'react-pdf';
import { BrowserRouter as Router, Route, Link, Switch , Redirect} from "react-router-dom";
import PdfUpload from './PdfUpload';
 
export default class Records extends Component {
constructor(props) {
    super(props)
    this.state = {files: []}
    this.retrieveFiles = this.retrieveFiles.bind(this);
}


        // componentWillMount() {
            retrieveFiles() {
    axios.get(`http://localhost:8080/api/pdf/${this.props.match.params.id}`, {
        params: {
            id: this.props.match.params.id
        }
    }).then((response) => {
       console.log("Yes, it worked RECORDS");
       console.log(response.data)
       this.setState({files: response.data})
       console.log(this.state.files)
     }).catch((error) => {
         console.log(this.props.match.id)
        console.log(error);
      })
    }

      componentDidMount() {
        this.retrieveFiles();
      }
   
    render() {
        if (this.state.files.length) {
        const pdfs = this.state.files.map((file) => {
            return (
            <Link to={`/record/${file.id}`}><button>{file.name}</button></Link>
            )
            })
        return (
            <div>
            <PdfUpload retrieveFiles={this.retrieveFiles} petid={this.props.match.params.id}/>
            <div>
            {pdfs}
            </div>
            </div>
        )
      } else {
          return (
              <div>
            <PdfUpload retrieveFiles={this.retrieveFiles} petid={this.props.match.params.id}/>
            </div>
          )
      }
    }
}