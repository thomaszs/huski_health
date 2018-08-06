import React from "react";

export default function ActivityItem(props) {
  return (
    <div className="timeline__box">
      <div className="timeline__date">
        {props.date.slice(0,10)}
      </div>
      <div className="timeline__post">
        <div className="timeline__content">
          {props.notes}<i className="fas fa-trash-alt" style={{float:"right"}}></i>
        </div>
      </div>
    </div>
  );
}