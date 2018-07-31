import React, { Component } from 'react';
import $ from 'jquery';
import { withRouter } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import PetProfile from './PetProfile.jsx';
import Timeline from './Timeline.jsx';
import PetChart from './PetChart.jsx';
import StatusBar from './StatusBar.jsx';
import NewPetForm from './NewPetForm.jsx';

// import PetActivity from 'PetActivity.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {

        $.ajax('http://localhost:8080/api/pet/', {
          method: 'POST',
          data: {
            id: this.props.match.params.id
          }, 
          success: (result) => {
            console.log("Yes, it worked");
            console.log(result); 
            this.setState({pet: result})
            console.log(this.state.pet)
          },
          error: function(err) {
            console.log("It doesnt work")
            }
        });
    }

    render() {
        return (
            <div>
                < NavBar />
                <div className="container-fluid">
                    <div className="row">
                        {/* <div className="col-sm-3">
                             <PetProfile pet={this.state.pet} />
                        </div> */}
                        <div className="col-sm-9">
                            <div className="col-sm-8">
                                < PetChart pet={this.state.pet} />
                                < Timeline pet={this.state.pet} history={this.state.history}/>
                            </div>
                                < StatusBar pet={this.state.pet}/> 
                            <div className="col-sm-4">
                                < NewPetForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
withRouter(Dashboard);
export default Dashboard;