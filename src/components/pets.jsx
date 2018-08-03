import React from 'react';
import PetCard from './PetCard';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";


export default function Pets(props) {

    const petCards = props.pets.map((pet) => {
        return (
            <PetCard pet={pet} key={pet.id} />
        )
    });


    return (
<<<<<<< HEAD
           <div className="row" style={{ marginLeft: "20px" }}>

           {/* for n of pets, render PetCard */}
           {petCards}
           <div className="row" style={{ marginTop: "20px" }}>
               <a className="btn-new-pet" href="http://localhost:3000/pets/new"><Link to={`/pets/new`} ></Link><button type="button" className="btn btn-info btn-circle btn-xl">
                   <i className="glyphicon glyphicon-plus"></i>
               </button></a>
           </div>
           </div>

           )
    }
=======
        // <Switch>
        // <PropsRoute exact path="/" component={Pets} pet={props.pets}/>
        // <PropsRoute exact path="/pet"  re/>
        // </Switch>
        <fragment>
            <div className="row">
                <h1><a className="btn-new-pet" href="http://localhost:3000/pets/new">Add New Pet<strong>+</strong></a></h1>
            </div>
            <div className="row-pets">
                {/* for n of pets, render PetCard */}
                {petCards}

            </div>
        </fragment>

    )
}
// export default Pets;
>>>>>>> adb3b850275a8b88dd65464596e22a720a8a104b
