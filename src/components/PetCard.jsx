import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Event from './Activity';
import axios from 'axios'
import FileUpload from './FileUpload';

export default class PetCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      type: "",
      weights: [{}]
    };

    this.togglePopup = this.togglePopup.bind(this)
    this.onClickTypeActivity = this.onClickTypeActivity.bind(this)
    this.onClickTypeFeeding = this.onClickTypeFeeding.bind(this)
    this.onClickTypeWeight = this.onClickTypeWeight.bind(this)
    this.fetchData = this.fetchData.bind(this)

  }

  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    axios.get(`http://localhost:8080/api/pets/${this.props.pet.id}/weights/`)
      .then(response => {
        this.setState({ weights: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  onClickTypeActivity() {
    this.setState({
      type: "Activity",
      showPopup: !this.state.showPopup
    });
  }

  onClickTypeFeeding() {
    this.setState({
      type: "Feeding",
      showPopup: !this.state.showPopup
    });
  }

  onClickTypeWeight() {
    this.setState({
      type: "Weight",
      showPopup: !this.state.showPopup
    });
  }

  render() {
    return (
      <div className="col-sm-4">
        <div className="chart-wrapper">
          <div className="chart-title">
            <Link to={`/pet/${this.props.pet.id}`} weight={this.state.weights}><h1>{this.props.pet.name}</h1></Link>
          </div>
          <div className="chart-stage">
            <div className="card" style={{ width: "100%" }}>
              <img className="card-img-top responsive" style={{ width: "100%", objectFit: "cover" }} src={this.props.pet.img}
                alt="Card cap" ></img>
              <div className="card-body">
              </div>
              <div className="container-profile" style={{ padding: "10px" }}>
              </div>
              <div className="card-body-buttons">
                <button onClick={this.onClickTypeFeeding} className="btn btn-activity" href="#">Feed Me</button>
                <button onClick={this.onClickTypeWeight} className="btn btn-activity" href="#">Update Weight</button>
                <Link to={`/records/${this.props.pet.id}`} style={{ float: "right" }}><button className="btn btn-warning">Records</button></Link>
                <Link to={`/images/${this.props.pet.id}`} style={{ float: "right" }}><button className="btn btn-warning">Images</button></Link>
              </div>
            </div>
          </div>
        </div>
        {this.state.showPopup ?
          <Event
            text='Close Me'
            type={this.state.type}
            pet={this.props.pet}
            closePopup={this.togglePopup.bind(this)}
            onNewActivity={this.onNewActivity}
          />
          : null
        }
      </div>
    )
  }
}

