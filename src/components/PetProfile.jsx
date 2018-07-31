import React, { Component } from 'react';
import $ from 'jquery';




class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: this.props.pet,
      petName: this.props.pet[0].name,
      petWeight: this.props.pet[0].weight,
      petBreed: this.props.pet[0].breed,
      isEditing: false,
      test: 'hello,world',
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editPetProfile = this.editPetProfile.bind(this);
    this.savePetProfile = this.savePetProfile.bind(this);
    this.onChangePetName = this.onChangePetName.bind(this);
    this.onChangePetWeight = this.onChangePetWeight.bind(this);
    this.onChangePetBreed = this.onChangePetBreed.bind(this);

  }


  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  editPetProfile(event) {
    this.toggleEdit();
  }

  savePetProfile(event) {
    event.preventDefault();
    $.ajax('http://localhost:8080/api/pets/1', {
      method: 'POST',
      data: {
        newPetName: this.state.petName,
        newPetWeight: this.state.petWeight,
      },
      success: function (result) {
        console.log("Yes, it worked");
        console.log(result); // {result: "True"}
      },
      error: function (err) {
        console.log("It doesnt work")
      }
    });
    this.toggleEdit();
    console.log(event)
  }

  onChangePetName(event) {
    this.setState({ petName: event.target.value })
  }

  onChangePetWeight(event) {
    this.setState({ petWeight: event.target.value })
  }

  onChangePetBreed(event) {
    this.setState({ petBreed: event.target.value })
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <div className="chart-title">
            <div className="chart-wrapper">
              <div className="chart-title">
                <div id="profile">
                  <h1>{this.state.petName}</h1>
                  <img className="pet-img" style={{ width: "100%", borderRadius: "8px" }} src="https://toll-imageinaboxllc.netdna-ssl.com/wp-content/uploads/2014/06/Fat-Cat_400-2.jpg" />
                </div>
                {/*Consider creating a EditPetProfile.jsx component. Will need to make ajax post request to the server to save new pet information*/}
                <div className="chart-notes">
                  <div className="form-group">
                  <table className="table table-dark" style={{ fontSize: 16 }}>
                    <form>
                      <label>Name:</label> <input type="text" className="form-control" name="name" placeholder={this.state.pet[0].name} defaultValue={this.state.petName} onChange={this.onChangePetName} /><br />
                      <label>Weight:</label><input type="text" className="form-control" name="weight" defaultValue={this.state.petWeight} onChange={this.onChangePetWeight} /><br />
                      <label>Age:</label><input type="text" className="form-control" name="age" /><br />
                      <label>Birthday:</label><input type="text" className="form-control" name="birthday" /><br />
                      <label>Breed:</label><input type="text" className="form-control" name="breed" defaultValue={this.state.petBreed} onChange={this.onChangePetBreed} /><br />
                      <label>Notes:</label> <input type="text" className="form-control" name="notes" /><br />
                      <button type="button" className="btn btn-success" onClick={this.savePetProfile}>Save</button>
                    </form>
                    </table>
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
          <div id="profile">
            <h1>{this.state.petName}</h1>
            <img className="pet-img" alt="petprofilepic" style={{ width: "100%", borderRadius: "8px" }} src="https://toll-imageinaboxllc.netdna-ssl.com/wp-content/uploads/2014/06/Fat-Cat_400-2.jpg" />
          </div>
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
                <tr>
                  <td>Age:</td>
                  <td>{this.props.pet[0].age}</td>
                </tr>
                <tr>
                  <td>Birthday:</td>
                  <td>{this.props.pet[0].birthday}</td>
                </tr>
                <tr>
                  <td>Breed:</td>
                  <td>{this.state.petBreed}</td>
                </tr>
                <tr>
                  <td>Owners:</td>
                  <td>{this.props.pet[0].owner}</td>
                </tr>
                <tr>
                  <td>Notes:</td>
                  <td>{this.props.pet[0].notes}</td>
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