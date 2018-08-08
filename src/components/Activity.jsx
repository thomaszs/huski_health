import React from 'react';
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
        $.ajax(`http://localhost:8080/api/pets/${this.props.pet.id}/activity`, {
          method: 'POST',
          data: {
            type: this.props.type,
            notes: this.state.notes, 
            petId: this.props.pet.id
          }, 
          success: (result) => {
            // call function defined in Dashboard to set the new state
            if (this.props.type === "Activity"){
              this.props.onNewActivity()
            }
            
            return this.props.closePopup()

          },
          error: function (err) {
            console.log(err)
          }
        });
    }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h2>New {this.props.type}</h2>
            <table className="table table-dark" style={{ fontSize: 16 }}>
              <form>
                <label className="pop-up-label">Enter New {this.props.type}</label><br/>
                <input type="text" name="notes" style={{width:"100%", color:"black"}}onChange={this.onChangeNotes}/><br/>
                <button type="button" className="btn btn-primary btn-sm" onClick={this.saveEvent}>Submit</button><a style={{float: "right"}} onClick={this.props.closePopup}>Close</a>
              </form>
            </table>
          </div>
        </div>
      );
    }
  }

          