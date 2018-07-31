import React, { Component } from 'react';
// import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';

const data2012 = [
  {quarter: 1, earnings: 13},
  {quarter: 2, earnings: 16},
  {quarter: 3, earnings: 14},
  {quarter: 4, earnings: 19}
];

const data2013 = [
  {quarter: 1, earnings: 15},
  {quarter: 2, earnings: 12},
  {quarter: 3, earnings: 19},
  {quarter: 4, earnings: 13}
];

const data2014 = [
  {quarter: 1, earnings: 11},
  {quarter: 2, earnings: 13},
  {quarter: 3, earnings: 20},
  {quarter: 4, earnings: 15}
];

const data2015 = [
  {quarter: 1, earnings: 18},
  {quarter: 2, earnings: 13},
  {quarter: 3, earnings: 15},
  {quarter: 4, earnings: 12}
];

class WeightChart extends React.Component {
  render() {
    return (
      <div>
        <h2>Weight Over Time</h2>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={["Week 1", "Week 2", "Week 3", "Week 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x}lbs`)}
          />
          <VictoryStack
            colorScale={"warm"}
          >
            <VictoryBar
              data={data2012}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2013}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2014}
              x={"quarter"}
              y={"earnings"}
            />
            <VictoryBar
              data={data2015}
              x={"quarter"}
              y={"earnings"}
            />
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}




export default WeightChart;