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