import React, { Component } from 'react';
import ActivityItem from './ActivityItem.jsx'

class Timeline extends Component {
  constructor(props) {
    super(props)
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
            <button type="button" className="btn btn-activity">Add Activity</button>
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
      </div>
    );
  }
}
export default Timeline;

