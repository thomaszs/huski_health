import React, { Component } from 'react';
// import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import { VictoryChart, VictoryLabel, VictoryLine, VictoryAxis, VictoryTheme, VictoryStack, VictoryScatter, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip } from 'victory';

class WeightChart extends React.Component {
  render() {
    return (
      <div>
        <h1>Weight Over Time</h1>
        <VictoryChart height={400} width={400}
        containerComponent={<VictoryVoronoiContainer/>}
      >
          <VictoryGroup
            color="#c43a31"
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={[
              { x: 1, y: -3 },
              { x: 2, y: 5 },
              { x: 3, y: 3 },
              { x: 4, y: 0 },
              { x: 5, y: -2 },
              { x: 6, y: -2 },
              { x: 7, y: 5 }
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
          <VictoryGroup
            labels={(d) => `y: ${d.y}`}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10 }}
              />
            }
            data={[
              { x: 1, y: 1 },
              { x: 2, y: 1 },
              { x: 3, y: 1 },
              { x: 4, y: 1 },
              { x: 5, y: 1 },
              { x: 6, y: 1 },
              { x: 7, y: 1 },
            ]}
          >
            <VictoryLine/>
            <VictoryScatter
              size={(d, a) => {return a ? 8 : 3;}}
            />
          </VictoryGroup>
       </VictoryChart>
      </div>
    );
  }
}




export default WeightChart;