import React, { Fragment, Component } from 'react';
import PetCard from './PetCard';
import axios from 'axios'
import Cookies from 'universal-cookie';
import FileUpload from './FileUpload';
import { render } from 'react-dom'
import {
    PlusButton,
} from 'react-svg-buttons'

const AddNewPet = () => (
    <div>
        <PlusButton 
          size={50}
          thickness={2}
          color="#FF9400"
        />
    </div>
)

export default class Pets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pets: []
        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        let userId = cookies.get('hh')
        axios.get(`http://localhost:8080/api/pets/${userId}`)
            .then(response => {
                this.setState({ pets: response.data })
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <h1><a className="btn-new-pet" href="http://localhost:3000/pets/new"><AddNewPet /><small>Add New Pet</small></a></h1>
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
