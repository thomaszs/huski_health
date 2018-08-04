import React, {Fragment, Component} from 'react';
import PetCard from './PetCard';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import getLatestPetWeight from '../App'
import axios from 'axios'

export default class Pets extends Component {
    constructor(props){
        super(props)
        this.state = {
            pets: []
        }
            
    }

    // const petCards = props.pets.map((pet) => {
    //     return (
    //         <PetCard pet={pet} key={pet.id} />
    //     )
    // });

    componentDidMount(){
        axios.get(`http://localhost:8080/api/pets/${this.props.currentUser.id}`, {
            params: {userId: this.props.currentUser}
        }) 
          .then(response => {
            console.log(response);
            this.setState( { pets: response.data })
          })
          .catch(error => {
            console.log(error);
          });
    }

    render(){

    return (
        <Fragment>
            <div className="row">
                <h1><a className="btn-new-pet" href="http://localhost:3000/pets/new">Add New Pet<strong>+</strong></a></h1>
            </div>
            <div className="row-pets">
                {this.state.pets.map(pet => (
                    <PetCard pet={pet} key={pet.id} />
                ))}
            </div>
        </Fragment>

    )
}
}
// export default Pets;
