import React, { Component } from 'react';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: {
                name: ""
            },
            pets: [
                {
                    id: "",
                    name: "",
                    birthday: date,
                    age: int,
                    weight: "",
                    breed: "",
                    owner: currentUser,
                    notes: ""
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <div class="row" style="margin-left: 20px">
                    <div class="col-sm-4">
                        < petCard pet={this.state.pets}/>
                    </div>
                    <div class="col-sm-4">
                        < petCard pet={this.state.pets}/>
                    </div>
                    <div class="col-sm-4 col-md-3" style="margin-top: 15em">
                        <button type="button" class="btn btn-info btn-circle btn-xl">
                            <i class="glyphicon glyphicon-plus"></i>
                        </button>
                    </div>

                </div>
            </div>
        );
    }
}
export default Pets;