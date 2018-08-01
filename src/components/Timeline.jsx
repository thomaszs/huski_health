import React, { Component } from "react";
import ActivityItem from "./ActivityItem.jsx";
import Activity from './Activity.jsx';
import TimelineList from './TimelineList.jsx'


class Timeline extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="chart-wrapper">
        <div className="chart-stage" id="chart-02">
        <h2>Activity Timeline</h2>
        <button type="button" className="btn btn-activity">
            Add Activity
        </button>
        <TimelineList activities={this.props.activities}/>
        </div>
        </div>
      </div>
    );
  }
}

export default Timeline;




// export default function Timeline(props) {
//   const activities = props.activities.map(activity => {
//     return (
//       <ActivityItem
//         key={activity.id}
//         notes={activity.notes}
//         date={activity.created_at}
//       />
//     );
//   });

//   function addActivity() {
//     console.log("hello activity to be added")
//   }


//   return (
//     <div>
//       <div className="chart-wrapper">
//         <div className="chart-stage" id="chart-02">
//           <h2>Activity Timeline</h2>
//           <button type="button" className="btn btn-activity" onClick={addActivity}>
//             Add Activity
//           </button>
//           {/* <Activity/> */}
//           <form>
//           <label>Notes</label> <input type="text"/>
//           </form>
//           <div className="page">
//             <div className="page__demo">
//               <div className="main-container page__container">
//                 <div className="timeline">{activities}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

