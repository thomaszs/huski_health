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
        this.state = {loading: true}

        // this.onChangePetName = this.onChangePetName.bind(this);
        // this.onChangePetWeight = this.onChangePetWeight.bind(this);
        // this.onChangePetBreed = this.onChangePetBreed.bind(this);
        // this.updatePet = this.updatePet.bind(this)
    }

    // onChangePetName(event) { 
    //     event.preventDefault()
    //     this.setState(prevState => ({pet: {...prevState.pet, name: event.target.value }}))
    //   }
    
    //   onChangePetWeight(event) { 
    //     event.preventDefault()
    //     console.log(this.state.pet.weight)
    //     this.setState({pet: { weight: event.target.value }})
    //   }
     
    //   onChangePetBreed(event) { 
    //     event.preventDefault()
    //     this.setState(prevState => ({pet: {...prevState.pet, breed: event.target.value }}))
    //   }

    //   updatePet(result) {
    //     let item = this.state.pet;
    //     item.name = result.newPetName;
    //     item.weight = result.newPetWeight;
    //     item.breed = result.newPetBreed;
    //     this.setState({pet: item});
    //   }
    

    componentDidMount() {

        this.props.requireCurrentUser()

        $.ajax('http://localhost:8080/api/pet/', {
          method: 'POST',
          data: {
            id: this.props.match.params.id
          }, 
          success: (result) => {
            console.log("Yes, it worked");
            console.log(result); 
            this.setState({pet: result[0], loading: false})
            console.log(this.state.pet)
          },
          error: function(err) {
            console.log("It doesnt work")
            }
        });
    }

    render() {
        if(this.state.loading) {
            return 'Loading...'
        } 
        return (
            <div>
                < NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                             <PetProfile pet={this.state.pet} updatePet={this.updatePet} onChangePetName={this.onChangePetName} onChangePetWeight={this.onChangePetWeight} onChangePetBreed={this.onChangePetBreed} />
                        </div>
                        <div className="col-sm-9">
                            <div className="col-sm-8">
                                < PetChart pet={this.state.pet} />
                                < Timeline pet={this.state.pet} history={this.state.history}/>
                            </div>
                                < StatusBar pet={this.state.pet}/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
withRouter(Dashboard);
export default Dashboard;