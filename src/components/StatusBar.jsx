import React, { Component } from 'react';
import $ from 'jquery';
import moment from 'moment';

const dogFacts = ['Grapes and raisins even in small amounts can cause kidney failure in dogs.', 'According to legend, the dog rescued on Noah\'s Ark was the Afghan Hound.', 'At age one, dogs have the same level of physical development that humans have at age 15.', 'Dogs have two times the amount of muscles in their ears than humans.', 'A dogs\' first sense to develop is touch.']

function randomItem(items)
{
return items[Math.floor(Math.random()*items.length)];
}

export default class StatusBar extends Component {
  constructor(props){
  super(props);

  this.getLatestPetWeight = this.getLatestPetWeight.bind(this)  
  }

  componentWillMount() {
    this.getLatestFeeding();
    this.setState({data: {created_at: ""}})
    this.getLatestPetWeight();

  }
  getLatestFeeding() {
    const { pet: { id } = {} } = this.props;
    $.get(`http://localhost:8080/api/pets/${ id }/feeding`)
    .then(data => {
      if (data[0] === undefined) {
        data[0].created_at = ""
      }
      this.setState({data: data[0]})
    })
    .catch(err => {
      console.log(err);
    });
  }
 
  getLatestPetWeight() {
    const { pet: { id } = {} } = this.props;
    $.get(`http://localhost:8080/api/pets/${ id }/latestweights`)
    .then(weight => {
      if (weight[0] === undefined) {
        weight[0].notes = ""
      }
      this.setState({weight: weight[0].notes})
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    const lastActive = (this.props.active[0] && moment(this.props.active[0].created_at).fromNow()) || "No Activites"
    const activityNotes = (this.props.active[0] && this.props.active[0].notes) || ""
    const date = this.state.data.created_at
    const dateFromNow = moment(date).fromNow();
    const notes = this.state.data.notes
    const weight = this.state.weight
    
  return (
    <div className="col-lg-3">
    <div className="row">
      <div className="col-sm-3 col-lg-12">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h2>Current Weight</h2>
          </div>
          <div className="chart-stage" id="chart-05">
            <h1>{weight} lbs <i className="fas fa-weight" style={{ float: "right" }}></i></h1>
          </div>
          <div className="chart-notes">
          </div>
        </div>
      </div>
      <div className="col-sm-3 col-lg-12">
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
    <div className="col-sm-3 col-lg-12">
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
    <div className="col-sm-3 col-lg-12">
      <div className="chart-wrapper">
        <div className="chart-title">
          <h2>Did you know...</h2>
        </div>
        <div className="chart-stage" id="chart-03">
          <p>{randomItem(dogFacts)}
      </p>
        </div>
        <div className="chart-notes">
        </div>
      </div>
    </div>
    </div>
    </div> 
    );
  }
}

  

