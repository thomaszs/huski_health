import React, { Component } from "react";
import ActivityItem from "./ActivityItem.jsx";
import Activity from './Activity.jsx'

export default function TimelineList(props) {
  const activities = props.activities.map(activity => {
    return (
      <ActivityItem
        key={activity.id}
        notes={activity.notes}
        date={activity.created_at}
      />
    );
  });

  return (
    <div>
          <div className="page">
            <div className="page__demo">
              <div className="main-container page__container">
                <div className="timeline">{activities}</div>
              </div>
            </div>
          </div>
    </div>
  );
}

