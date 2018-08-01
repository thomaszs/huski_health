import React, { Component } from 'react';
import $ from 'jquery';
import '../css/activity.css';


export default class Event extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: null
        }
        this.saveEvent = this.saveEvent.bind(this)
        this.onChangeNotes = this.onChangeNotes.bind(this)
    }
    
      onChangeNotes(event) { 
        event.preventDefault()
        this.setState({notes: event.target.value})
          }

      saveEvent(event) {
        event.preventDefault();
        console.log()
        $.ajax(`http://localhost:8080/api/pets/${this.props.pet.id}/activity`, {
          method: 'POST',
          data: {
            type: this.props.type,
            notes: this.state.notes, 
            petId: this.props.pet.id
          }, 
          success: (result) => {
              return this.props.closePopup()
            console.log("Yes, it worked");
          },
          error: function (err) {
            console.log("It doesnt work")
          }
        });
    }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>New {this.props.type}</h1>
            <form>
            Notes:<input type="text" name="notes" onChange={this.onChangeNotes}/><br/>
            <button type="button" className="btn btn-primary" onClick={this.saveEvent}>Submit</button>
          </form>
          <button onClick={this.props.closePopup}>Close</button>
          </div>
        </div>
      );
    }
  }

          