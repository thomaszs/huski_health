import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';

export default class StatusBar extends Component {
  constructor(props){
  super(props);

  
  }
  componentWillMount() {
    this.getLatestFeeding();
    this.setState({data: {created_at: ""}})
  }
  getLatestFeeding() {
    const { pet: { id } = {} } = this.props;
    $.get(`http://localhost:8080/api/pets/${ id }/feeding`)
    .then(data => {
      console.log("DATA", data[0])
      console.log("PROPS", this.props)
      if (data[0] === undefined) {
        data[0].created_at = ""
      }
      this.setState({data: data[0]})
    })
    .catch(err => {
      // debugger;
    });
  }
  render() {
    const lastActive = (this.props.activities[0] && moment(this.props.activities[0].created_at).fromNow()) || "No Activites"
    const activityNotes = (this.props.activities[0] && this.props.activities[0].notes) || ""
    const date = this.state.data.created_at
    const dateFromNow = moment(date).fromNow();
    const notes = this.state.data.notes
  return (
    <fragment>
    <div>
      <div className="col-sm-4">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h2>Current Weight</h2>
          </div>
          <div className="chart-stage" id="chart-05">
            <h1>22lbs <i className="fas fa-weight" style={{ float: "right" }}></i></h1>
          </div>
          <div className="chart-notes">
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h2>Last Fed</h2>
          </div>
          <div className="chart-stage" id="chart-01">
            <h1>{dateFromNow}<i className="fas fa-clock" style={{ float: "right" }}></i></h1>
        </div>
        <div className="chart-notes">
          {notes}
    </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="chart-wrapper">
        <div className="chart-title">
          <h2>Last Active</h2>
        </div>
        <div className="chart-stage" id="chart-02">
          <h1>{lastActive}<i className="fas fa-dumbbell" style={{ float: "right" }}></i></h1>
        </div>
        <div className="chart-notes">
        {activityNotes}
    </div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="chart-wrapper">
        <div className="chart-title">
          <h2>Did you know...</h2>
        </div>
        <div className="chart-stage" id="chart-03">
          <p>Frequencies of 20 to 50 Hertz are helpful in speeding the healing process of bone injuries. Cat's purr vibrations
            which range from 20 – 140 Hertz, can help heal soft tissue injuries to ligaments, tendons and muscles.
      </p>
        </div>
        <div className="chart-notes">
        </div>
      </div>
    </div>
    </div>
    </fragment>
    
    );
  }
}

  

