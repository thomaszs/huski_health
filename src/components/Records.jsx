import React, { Component } from 'react';
import axios from 'axios';
// import { Document, Page } from 'react-pdf';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import PdfUpload from './PdfUpload';

export default class Records extends Component {
    constructor(props) {
        super(props)
        this.state = { files: [] }
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
            this.setState({ files: response.data })
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
                        <div className="col-sm-3">
                            <div className="chart-wrapper">
                                <div className="chart-stage" style={{display:"flex"}}>
                                    <Link to={`/record/${file.id}`}><button className="btn btn-warning"style={{margin:"12px"}}>View</button></Link>
                                    <h2 style={{padding:"5px"}}>{file.name}</h2>
                                </div>
                            </div>
                        </div>
                )
            })
            return (
                <div>
                    <PdfUpload retrieveFiles={this.retrieveFiles} petid={this.props.match.params.id} />
                    <div>
                        {pdfs}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <PdfUpload retrieveFiles={this.retrieveFiles} petid={this.props.match.params.id} />
                </div>
            )
        }
    }
}