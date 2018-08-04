import React, { Component } from 'react';
import CheckBox from './CheckBox';
import SingleInput from './SingleInput';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import '../css/daypicker.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import swal from 'sweetalert'

const dogBreed = require('what-dog');

class NewPetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      // age: 0,
      speciesOptions: ["dog", "cat"],
      species: [],
      genderOptions: ["male", "female"],
      gender: [],
      birthday: "",
      weight: "",
      breed: "",
      image: "",
      note: "",
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePetNameChange = this.handlePetNameChange.bind(this);
    this.handleSpeciesSelection = this.handleSpeciesSelection.bind(this);
    this.handleGenderSelection = this.handleGenderSelection.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.addNewPet = this.addNewPet.bind(this);

  }
  addNewPet() { 
    swal({
      title: "Yay!",
      icon: "success",
      text: 'Your new pet was successfully added!'
    })
  }

  handlePetNameChange(e) {
    this.setState({ petName: e.target.value }, () => console.log('name:', this.state.petName));
  }
  handleSpeciesSelection(e) {
    this.setState({ species: [e.target.value] }, () => console.log('species', this.state.species));
  }
  handleGenderSelection(e) {
    this.setState({ gender: [e.target.value] }, () => console.log('gender', this.state.gender));
  }
  handleBirthdayChange(day) {
    this.setState({ birthday: day }, () => console.log('birthday:', this.state.birthday));
  }
  handleWeightChange(e) {
    this.setState({ weight: e.target.value }, () => console.log('weight:', this.state.petName));
  }
  handleBreedChange(e) {
    this.setState({ breed: e.target.value }, () => console.log('breed:', this.state.breed));
  }
  handleImageChange(e) {
    this.setState({ image: e.target.value }, () => console.log('image url:', this.state.image));
  }
  handleNoteChange(e) {
    this.setState({ note: e.target.value }, () => console.log('note:', this.state.note));
  }
  // handleClearForm(e) {
  //   e.preventDefault();
  //   this.setState({
  //     petName: "",
  //     species: [],
  //     gender: [],
  //     birthday: "",
  //     weight: "",
  //     breed: undefined,
  //     image: "",
  //     note: ""
  //   });
  // }
  handleFormSubmit(e) {
    e.preventDefault();
    const addNewPetRender = this.props.addNewPetRender
    const addNewPet = this.addNewPet
    const browserHistory = this.props.history
    const newPetInfo = {
      petName: this.state.petName,
      species: this.state.species,
      gender: this.state.gender,
      birthday: this.state.birthday,
      // weight: this.state.weight,
      breed: this.state.breed,
      accountID: this.props.currentUser.id,
      image: this.state.image,
      note: this.state.note
    };

    $.ajax('http://localhost:8080/api/whatDog', {
      method: 'POST',
      data: { dogUrl: this.state.image, },
      success: function (result) {
        console.log("Yes, it worked");
        // console.log(result); 
        newPetInfo.breed = result.doggyData.breed;
        newPetInfo.note = result.doggyData.about;
        console.log()
        $.ajax('http://localhost:8080/api/pet/new', {
          method: 'POST',
          data: newPetInfo,
          success: function (result) {
            console.log("Added new pet");
            console.log(result); 
            console.log(this)
            addNewPetRender();
            addNewPet();
            browserHistory.push('/pets')
          },
          error: function (err) {
            console.log(err)
            console.log("It doesnt work")
          }
        });
      },
      error: function (err) {
        console.log(err)
        console.log("It doesnt work")
      }
    });
    console.log(e)
    this.handleClearForm(e);
  }

  render() {
    const { birthday } = this.state;
    return (
      <div>
        <div className="container">
          <div className="chart-title">
            <div className="chart-wrapper" style={{ margin: "auto" }}>
              <div className="chart-title">
                <h1>Add a new pet!</h1>
                <div className="chart-notes">
                  <div className="form-group">
                    <form className="form-container" style={{ boxSizing: "borderBox" }} onSubmit={this.handleFormSubmit}>
                      <table className="table table-dark" style={{ fontSize: 16 }}>
                        <SingleInput
                          inputType={'text'}
                          title={'Pet name'}
                          name={'name'}
                          controlFunc={this.handlePetNameChange}
                          content={this.state.petName}
                          placeholder={'Type in your furry friend\'s name'} />

                        <CheckBox
                          title={'Is your pet a dog or a cat?'}
                          setName={'species'}
                          controlFunc={this.handleSpeciesSelection}
                          type={'radio'}
                          options={this.state.speciesOptions}
                          selectedOptions={this.state.species} />

                        <CheckBox
                          title={'Is your pet a boy or a girl?'}
                          setName={'gender'}
                          controlFunc={this.handleGenderSelection}
                          type={'radio'}
                          options={this.state.genderOptions}
                          selectedOptions={this.state.gender} />

                        <DayPickerInput
                          placeholder={'Please select birthday'}
                          style={{ color: "#000" }}
                          onDayChange={this.handleBirthdayChange}
                        />

                        {/* <SingleInput
                          inputType={'text'}
                          title={'Weight'}
                          name={'weight'}
                          controlFunc={this.handleWeightChange}
                          content={this.state.weight}
                          placeholder={'Enter your pet\'s weight in lbs'} />

                        <SingleInput
                          inputType={'text'}
                          title={'Breed'}
                          name={'breed'}
                          controlFunc={this.handleBreedChange}
                          content={this.state.breed} /> */}

                        <SingleInput
                          inputType={'text'}
                          title={'Image'}
                          name={'image'}
                          controlFunc={this.handleImageChange}
                          content={this.state.image}
                          placeholder={'Enter image url to find out your pet\'s breed'} />

                        <Link to={`/pets`}><input onClick={this.handleFormSubmit}
                          type="submit"
                          className="btn btn-primary float-right"
                          value="Submit" /></Link>
                        {/* <button
                          className="btn btn-link float-left"
                          onClick={this.handleClearForm}>Clear form</button> */}
                      </table>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NewPetForm;