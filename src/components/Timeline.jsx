import React, { Component } from "react";
import Event from './Activity';
import TimelineList from './TimelineList.jsx'


class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      type: "", 
    }
    this.togglePopup = this.togglePopup.bind(this)
    this.onClickTypeActivity = this.onClickTypeActivity.bind(this)
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

  render() {
    return (
      <div>
        <div className="chart-wrapper">
        <div className="chart-stage" id="chart-02">
        <h2>Activity Timeline</h2>
        <button  onClick={this.onClickTypeActivity} type="button" className="btn btn-activity">Add Activity</button>
        <TimelineList activities={this.props.activities}/>
        {this.state.showPopup ? 
          <Event text='Close Me' type={this.state.type} pet={this.props.pet} closePopup={this.togglePopup.bind(this)} onNewActivity={this.props.onNewActivity}/>
          : null
          }
        </div>
      </div>
      </div>
    );
  }
}

export default Timeline;

