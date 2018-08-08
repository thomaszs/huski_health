import React, { Component } from 'react';
import WeightChart from './WeightChart.jsx';

class PetChart extends Component {
    render(){
        return(
            <div>
            <div className="chart-wrapper">
              <div className="chart-stage" id="chart-02">        
                <WeightChart pet={this.props.pet} getLatestPetWeight={this.props.getLatestPetWeight}/>
              </div>
              <div className="chart-notes">
                Notes about this chart
              </div>
            </div>
            </div>
        )
    }
}

export default PetChart