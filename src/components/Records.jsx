import React, { Component } from 'react';
import axios from 'axios';
// import { Document, Page } from 'react-pdf';
import { BrowserRouter as Router, Route, Link, Switch , Redirect} from "react-router-dom";
 
export default class Records extends Component {
constructor(props) {
    super(props)
    this.state = {files: []}
}


        componentWillMount() {
    axios.get(`http://localhost:8080/api/pdf/1`, {
        params: {
            id: 1
        }
    }).then((response) => {
       console.log("Yes, it worked RECORDS");
       console.log(response.data)
       this.setState({files: response.data})
       console.log(this.state.files)
     }).catch((error) => {
        console.log(error);
      })
    }

   
    render() {
        if (this.state.files.length) {
        const pdfs = this.state.files.map((file) => {
            return (
            <Link to={`/record/${file.id}`}><button>{file.filename}</button></Link>
            )
            })
        return (
            <div>
            {pdfs}
            </div>
        )
      } else {
          return (
              null
          )
      }
    }
}