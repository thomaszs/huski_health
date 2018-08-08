import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import PdfUpload from './PdfUpload';

export default class Records extends Component {
    constructor(props) {
        super(props)
        this.state = { files: [] }
        this.retrieveFiles = this.retrieveFiles.bind(this);
    }
    retrieveFiles() {
        axios.get(`http://localhost:8080/api/pdf/${this.props.match.params.id}`)
            .then((response) => {
                this.setState({ files: response.data })
            }).catch((error) => {
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
                            <div className="chart-stage" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                                <div><h1><i class="far fa-file-pdf" style={{ fontSize: "3em" }}></i></h1></div>
                                <div><h2 style={{ padding: "5px" }}>{file.name}</h2></div>
                                <div><Link to={`/record/${file.id}`}><button className="btn btn-warning" style={{ float: "right", margin: "5px" }}>View</button></Link></div>
                            </div>
                        </div>
                    </div>
                )
            })
            return (
                <div>
                    <PdfUpload retrieveFiles={this.retrieveFiles} petid={this.props.match.params.id} />
                    <div>
                        <div className="container-row" style={{ marginLeft: "40px", marginRight: "40px" }}>
                            {pdfs}
                        </div>
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