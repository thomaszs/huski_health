import React from 'react';
import PetCard from './PetCard';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function Pets(props) {

    const petCards = props.pets.map((pet) => {
        return (
            <PetCard pet={pet} key={pet.id} />
        )
    });


    return (
        // <Switch>
        // <PropsRoute exact path="/" component={Pets} pet={props.pets}/>
        // <PropsRoute exact path="/pet"  re/>
        // </Switch>
        <fragment>
            <div className="row" style={{ marginTop: "20px" }}>
                <a className="btn-new-pet" href="http://localhost:3000/pets/new"><h1>Add New Pet <strong>+</strong> </h1></a>
            </div>
            <div className="row">
                {/* for n of pets, render PetCard */}
                {petCards}

            </div>
        </fragment>

    )
}
// export default Pets;
