import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPet = this.props.pet.id
        }
    }

    render() {
        return(
            <div>
                < NavBar />
            <div className="container-fluid">

              <div className="row">
                <div className="col-sm-3">
                    < PetProfile pet={this.state.currentPet} />
                </div>
              </div>
                <div className="col-sm-9">
                  <div className="row">
                    <div className="col-sm-8">
                    < PetChart pet={this.state.currentPet} />
                    < PetActivity pet={this.state.currentPet} />

                    </div>

                    <div className="col-sm-4">
                          < CurrentWeight weight={this.state.currentPet}/> 
                    </div>
                    <div className="col-sm-4">
                          < LastFed lastFed={this.state.currentPet}/>
                    </div>
                    <div className="col-sm-4">
                          < LastActive lastActive={this.state.currentPet}/>
                    </div>
                    <div className="col-sm-4">
                          < DidYouKnow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Dashboard;