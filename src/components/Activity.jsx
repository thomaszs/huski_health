import React, { Component } from 'react';
// import {
import '../css/activity.css';
//   PopupboxManager,
//   PopupboxContainer
// } from 'react-popupbox';

export default class Popup extends React.Component {
    constructor(props) {
        super(props)
    }

    onChangeType(event) { 
        event.preventDefault()
        this.setState(prevState => ({pet: {...prevState.pet, name: event.target.value }}))
      }
    
      onChangeNotes(event) { 
        event.preventDefault()
        console.log(this.state.pet.weight)
        this.setState(prevState => ({...prevState.pet, weight: event.target.value }))
      }

    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
            <form>
            Type: <input type="text" name="type"   onChange={this.onChangeType}/><br/>
            Notes:<input type="text" name="notes" onChange={this.onChangePetWeight}/><br/>
            <button type="button" className="btn btn-primary" onClick={this.saveActivity}>Submit</button>
          </form>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }

          