import React, { Component } from 'react';

// import NavBar from 'NavBar.jsx';
// import PetProfile from 'PetProfile.jsx';
// import PetChart from 'PetChart.jsx';
// import PetActivity from 'PetActivity.jsx';
// import StatusBar from 'StatusBar.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // id: "",
            // userName: this.props.currentUser.name,
            // currentPet: this.props.pet
        }
    }

    render() {
        return(
            <div>
                {/* < NavBar /> */}
            <div className="container-fluid">

              <div className="row">
                <div className="col-sm-3">
                    {/* < PetProfile pet={this.state.currentPet} /> */}
                </div>
              </div>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-sm-8">
                    {/* < PetChart pet={this.state.currentPet} />
                    < PetActivity pet={this.state.currentPet} /> */}

                    </div>

                    <div className="col-sm-4">
                          {/* < CurrentWeight weight={this.state.currentPet}/>  */}
                    </div>
                    <div className="col-sm-4">
                          {/* < LastFed lastFed={this.state.currentPet}/> */}
                    </div>
                    <div className="col-sm-4">
                          {/* < LastActive lastActive={this.state.currentPet}/> */}
                    </div>
                    <div className="col-sm-4">
                          {/* < DidYouKnow /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Dashboard;