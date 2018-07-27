import React, { Component } from 'react';
import PetCard from './PetCard';

class Pets extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="row" style={{ marginLeft: "20px" }}>
                {/* for n of pets, render PetCard */}
                <PetCard pet={this.props.pet} />
                <PetCard pet={this.props.pet} />
                <PetCard pet={this.props.pet} />
                <div className="col-sm-4 col-md-3" style={{ marginTop: "15em" }}>
                    <button type="button" className="btn btn-info btn-circle btn-xl">
                        <i className="glyphicon glyphicon-plus"></i>
                    </button>
                </div>
            </div>
        );
    }
}
export default Pets;