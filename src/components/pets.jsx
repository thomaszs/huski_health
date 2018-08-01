import React from 'react';
import PetCard from './PetCard';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


export default function Pets(props) {

        const petCards = props.pets.map((pet) => {
           return (
           <PetCard pet={pet} key={pet.id} />
           )
        })

    return (
        // <Switch>
        // <PropsRoute exact path="/" component={Pets} pet={props.pets}/>
        // <PropsRoute exact path="/pet"  re/>
        // </Switch>
           <div className="row" style={{ marginLeft: "20px" }}>
           {/* for n of pets, render PetCard */}
           {petCards}
           <div className="col-sm-4 col-md-3" style={{ marginTop: "15em" }}>
               <a className="btn" href="http://localhost:3000/pets/new"><button type="button" className="btn btn-info btn-circle btn-xl">
                   <i className="glyphicon glyphicon-plus"></i>
               </button></a>
           </div>
       </div>
           )
    }
// export default Pets;