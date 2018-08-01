import React, { Component } from 'react';
import ActivityItem from './ActivityItem.jsx'
import Event from './Activity';

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPopup: false,
      type: ""
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
    console.log("CLICKED")
    this.setState({
      type: "Activity",
      showPopup: !this.state.showPopup
    });
  }

  render() {
    // const activity = this.props.history.map((activity) => {
    //   return <ActivityItem key={activity.id} date={activity.created_at} post={activity.notes} />
    // });
    return (
      <div>
        <div className="chart-wrapper">
          <div className="chart-stage" id="chart-02">
            <h2>Activity Timeline</h2>
            <button  onClick={this.onClickTypeActivity} type="button" className="btn btn-activity">Add Activity</button>
            <div className="page">
              <div className="page__demo">
                <div className="main-container page__container">
                  <div className="timeline">
                    <div className="timeline__group">
                    <ActivityItem />
                    </div>
                    <div className="timeline__group">
                    <ActivityItem />
                    </div>
                    <div className="timeline__group">
                      <ActivityItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showPopup ? 
          <Event text='Close Me' type={this.state.type} pet={this.props.pet} closePopup={this.togglePopup.bind(this)}/>
          : null
          }
      </div>
    );
  }
}
export default Timeline;