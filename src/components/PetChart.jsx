import React, { Component } from 'react';
import WeightChart from './WeightChart.jsx';

class PetChart extends Component {
    render(){
        return(
            <div>
            <div className="chart-wrapper">
              <div className="chart-stage" id="chart-02">
                
                <WeightChart pet={this.props.pet}/>

                {/* <img style={{width: "100%"}} src="https://www.amcharts.com/wp-content/uploads/2013/12/demo_7398_light.jpg" /> */}
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