import React, { Component } from 'react';

class PetProfile extends Component {
    render() {
        return (
            <div className="chart-title">
            <div className="chart-wrapper">
            <div className="chart-title">
            {console.log(this.props.pet[0])}
                      <h2>{this.props.pet[0].name}</h2>
                      <img className="pet-img" style={{width: "100%"}} src="https://toll-imageinaboxllc.netdna-ssl.com/wp-content/uploads/2014/06/Fat-Cat_400-2.jpg" />
                    </div>
                    <div className="chart-stage" id="chart-01">

                    </div>
                    <div className="chart-notes">
            <table className="table table-dark" style={{fontSize: 16}}>
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
                  <button type="button" className="btn btn-primary">Edit Profile</button>
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