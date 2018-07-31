import React, { Component } from 'react';
import $ from 'jquery';




class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    pet: this.props.pet,
    petName: this.props.pet.name,
    petWeight: this.props.pet.weight,
    isEditing: false
  }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editPetProfile = this.editPetProfile.bind(this);
    this.savePetProfile = this.savePetProfile.bind(this);
    this.onChangePetName = this.onChangePetName.bind(this);
    this.onChangePetWeight = this.onChangePetWeight.bind(this);
    // this.onChangePetBreed = this.onChangePetBreed.bind(this);
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  editPetProfile(event) {
    this.toggleEdit();
  }

  savePetProfile(event) {
    event.preventDefault();
    console.log()
    $.ajax(`http://localhost:8080/api/pets/${this.props.pet.id}`, {
      method: 'POST',
      data: {
        id: this.props.pet.id,
        newPetName: this.state.petName, 
        newPetWeight: this.state.petWeight
        // newPetBreed: this.state.pet.breed
      }, 
      success: (result) => {
        // console.log("Yes, it worked");
        // console.log(result); // {result: "True"}
      //  return this.props.updatePet(result)
      },
      error: function (err) {
        console.log("It doesnt work")
      }
    });
    this.toggleEdit();
    console.log(event)
  }

  onChangePetName(event) { 
    event.preventDefault()
    this.setState({petName: event.target.value})
  }

  onChangePetWeight(event) { 
    event.preventDefault()
    console.log(this.state.pet.weight)
    this.setState({petWeight: event.target.value})
  }
 
  // onChangePetBreed(event) { 
  //   event.preventDefault()
  //   this.setState(prevState => ({...prevState.pet, breed: event.target.value }))
  // }
  

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <div id="profile">
          <img className="pet-img" style={{ width: "100%" }} src={this.state.pet.img} />
      {/*Consider creating a EditPetProfile.jsx component. Will need to make ajax post request to the server to save new pet information*/}
          <form>
            Name: <input type="text" name="name"  defaultValue={this.state.petName} onChange={this.onChangePetName}/><br/>
            Weight:<input type="text" name="weight" defaultValue={this.state.petWeight} onChange={this.onChangePetWeight}/><br/>
            Age:<input type="text" name="age"/><br/>
            Birthday:<input type="text" name="birthday"/><br/>
            Breed:<input type="text" name="breed" defaultValue={this.state.pet.breed} onChange={this.onChangePetBreed}/><br/>
            Notes: <input type="text" name="notes"/><br/>
            <button type="button" className="btn btn-primary" onClick={this.savePetProfile}>Save</button>
          </form>
          </div>
        </div>
      )
    }

    return (
      <div className="chart-title">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h2>{this.state.petName}</h2>
            <img className="pet-img" alt="petprofilepic" style={{ width: "100%" }} src={this.props.pet.img} />
          </div>
          <div className="chart-stage" id="chart-01">

          </div>
          <div className="chart-notes">
            <table className="table table-dark" style={{ fontSize: 16 }}>
              <tbody>
                <tr>
                  <td>Weight:</td>
                  <td>{this.state.petWeight}</td>
                </tr>
                {/* <tr> */}
                  {/* <td>Age:</td>
                  <td>{this.props.pet.age}</td>
                </tr> */}
                <tr>
                  <td>Birthday:</td>
                  <td>{this.state.pet.date_of_birth}</td>
                </tr>
                <tr>
                  <td>Breed:</td>
                  <td>{this.state.pet.breed}</td>
                </tr>
                {/* <tr>
                  <td>Owners:</td>
                  <td>{this.props.pet.owner}</td>
                </tr> */}
                <tr>
                  <td>Notes:</td>
                  <td>{this.state.pet.notes}</td>
                </tr>
                <tr>
                  <td>
                    <button type="button" className="btn btn-warning" onClick={this.editPetProfile}>Edit Profile</button>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default PetProfile; 