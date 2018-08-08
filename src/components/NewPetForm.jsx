import React, { Component } from 'react';
import CheckBox from './CheckBox';
import SingleInput from './SingleInput';
import $ from 'jquery';
import { Link } from "react-router-dom";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import swal from 'sweetalert'

class NewPetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
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
    this.setState({ petName: e.target.value });
  }
  handleSpeciesSelection(e) {
    this.setState({ species: [e.target.value] });
  }
  handleGenderSelection(e) {
    this.setState({ gender: [e.target.value] });
  }
  handleBirthdayChange(day) {
    this.setState({ birthday: day });
  }
  handleWeightChange(e) {
    this.setState({ weight: e.target.value });
  }
  handleBreedChange(e) {
    this.setState({ breed: e.target.value });
  }
  handleImageChange(e) {
    this.setState({ image: e.target.value });
  }
  handleNoteChange(e) {
    this.setState({ note: e.target.value });
  }

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
      breed: this.state.breed,
      accountID: this.props.currentUser.id,
      image: this.state.image,
      note: this.state.note
    };
    //Use ajax call to use image url to determine dog breed
    $.ajax('http://localhost:8080/api/whatDog', {
      method: 'POST',
      data: { dogUrl: this.state.image, },
      success: function (result) {
        newPetInfo.breed = result.doggyData.breed;
        newPetInfo.note = result.doggyData.about;
        $.ajax('http://localhost:8080/api/pet/new', {
          method: 'POST',
          data: newPetInfo,
          success: function (result) {
            addNewPetRender();
            addNewPet();
            browserHistory.push('/pets')
          },
          error: function (err) {
            console.log(err)
          }
        });
      },
      error: function (err) {
        console.log(err)
      }
    });
  }

  render() {
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
                          title={'Is your pet male or female?'}
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