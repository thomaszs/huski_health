import React, { Fragment, Component } from 'react';
import PetCard from './PetCard';
import axios from 'axios'
import { render } from 'react-dom'
import {
    PlusButton,
} from 'react-svg-buttons'

const Demo = () => (
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
        axios.get(`http://localhost:8080/api/pets/${this.props.currentUser.id}`, {
            params: { userId: this.props.currentUser }
        })
            .then(response => {
                console.log(response);
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
                    <h1><a className="btn-new-pet" href="http://localhost:3000/pets/new"><Demo />Add New Pet</a></h1>
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
