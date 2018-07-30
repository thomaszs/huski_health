import React from 'react';
import PetCard from './PetCard';


export default function Pets(props) {

        const petCards = props.pets.map((pet) => {
           return (
           <PetCard pet={pet} key={pet.id} />
           )
        })

    return (
           <div className="row" style={{ marginLeft: "20px" }}>
           {/* for n of pets, render PetCard */}
           {petCards}
           {/* <PetCard pet={this.props.pet} /> */}
           {/* <PetCard pet={props.pets[0]} />
           <PetCard pet={props.pets[1]} />  */}
           <div className="col-sm-4 col-md-3" style={{ marginTop: "15em" }}>
               <button type="button" className="btn btn-info btn-circle btn-xl">
                   <i className="glyphicon glyphicon-plus"></i>
               </button>
           </div>
       </div>
           )
    }
// export default Pets;