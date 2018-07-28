import React, { Component } from 'react';
import $ from 'jquery';

class PetProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: this.props.pet,
      petName: this.props.pet[0].name,
      petWeight: this.props.pet[0].weight, 
      isEditing: false, 
      test: 'hello,world',
     };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editPetProfile = this.editPetProfile.bind(this);
    this.savePetProfile = this.savePetProfile.bind(this);
   
  }


  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  editPetProfile(event) {
    this.toggleEdit(); 
  }

  savePetProfile(event){
    event.preventDefault(); 
    $.ajax('http://localhost:8080/api/pets/1', {
      method: 'POST',
      data: {
        newPetName: this.state.petName,
        newPetWeight: this.state.petWeight
      }, 
      success: function (result) {
        console.log("Yes, it worked");
        console.log(result); // {result: "True"}
      },
      error: function(err) {
        console.log("It doesnt work")
        }
    });
    console.log(event)
  }

 
 
  
  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <img className="pet-img" style={{ width: "100%" }} src="https://toll-imageinaboxllc.netdna-ssl.com/wp-content/uploads/2014/06/Fat-Cat_400-2.jpg" />
      {/*Consider creating a EditPetProfile.jsx component. Will need to make ajax post request to the server to save new pet information*/}
          <form>
            Name: <input type="text" name="name" placeholder={this.state.pet[0].name}/><br/>
            Weight:<input type="text" name="weight"/><br/>
            Age:<input type="text" name="age"/><br/>
            Birthday:<input type="text" name="birthday"/><br/>
            Breed:<input type="text" name="breed"/><br/>
            Owners:<input type="text" name="owners"/><br/>
            Notes: <input type="text" name="notes"/><br/>
            <button type="button" className="btn btn-primary" onClick={this.savePetProfile}>Save</button>
          </form>
        </div>
      )
    }
    return (
      <div className="chart-title">
        <div className="chart-wrapper">
          <div className="chart-title">
            <h2>{this.props.pet[0].name}</h2>
            <img className="pet-img" style={{ width: "100%" }} src="https://toll-imageinaboxllc.netdna-ssl.com/wp-content/uploads/2014/06/Fat-Cat_400-2.jpg" />
          </div>
          <div className="chart-stage" id="chart-01">

          </div>
          <div className="chart-notes">
            <table className="table table-dark" style={{ fontSize: 16 }}>
              <tbody>
                <tr>
                  <td>Weight:</td>
                  <td>{this.props.pet[0].weight}</td>
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
                  <td>{this.props.pet[0].breed}</td>
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
                    <button type="button" className="btn btn-primary" onClick={this.editPetProfile}>Edit Profile</button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-success">Add Activity</button>
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