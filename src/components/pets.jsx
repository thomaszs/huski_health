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
=======
        // <Switch>
        // <PropsRoute exact path="/" component={Pets} pet={props.pets}/>
        // <PropsRoute exact path="/pet"  re/>
        // </Switch>
           <div className="row">
>>>>>>> 209ed9267b46a7c485e5a378993bf3f46f823eef
           {/* for n of pets, render PetCard */}
           {petCards}
           <div className="row" style={{ marginTop: "20px" }}>
               <a className="btn-new-pet" href="http://localhost:3000/pets/new"><button type="button" className="btn btn-info btn-circle btn-xl">
                   <i className="glyphicon glyphicon-plus"></i>
               </button></a>
           </div>
           </div>

           )
    }