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
    this.setState({ petName: event.target.value })
  }

  onChangePetWeight(event) {
    event.preventDefault()
    console.log(this.state.pet.weight)
    this.setState({ petWeight: event.target.value })
  }

  // onChangePetBreed(event) { 
  //   event.preventDefault()
  //   this.setState(prevState => ({...prevState.pet, breed: event.target.value }))
  // }


  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <div className="chart-title">
            <div className="chart-wrapper">
              <div className="chart-title">
                <div id="profile">
                  <h1>{this.state.petName}</h1>
                  <img className="pet-img" style={{ width: "100%" }} src={this.state.pet.img} />
                  {/*Consider creating a EditPetProfile.jsx component. Will need to make ajax post request to the server to save new pet information*/}
                  <div className="chart-notes">
                    <div className="form-group">
                      <table className="table table-dark" style={{ fontSize: 16 }}>
                        <form>
                          <label>Name:</label>
                          <input type="text" className="form-control" name="name" defaultValue={this.state.petName} onChange={this.onChangePetName} /><br/>
                          <label>Weight:</label><input type="text" className="form-control" name="weight" defaultValue={this.state.petWeight} onChange={this.onChangePetWeight} /><br/>
                          <label>Age:</label><input type="text" className="form-control" name="age" /><br/>
                          <label>Birthday:</label><input type="text" className="form-control" name="birthday" /><br/>
                          <label>Breed:</label><input type="text" className="form-control" name="breed" defaultValue={this.state.pet.breed} onChange={this.onChangePetBreed} /><br/>
                          <label>Notes:</label> <input type="text" className="form-control" name="notes" /><br/>
                          <button type="button" className="btn btn-primary" onClick={this.savePetProfile}>Save</button>
                        </form>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="chart-title">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h1>{this.state.petName}</h1>
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