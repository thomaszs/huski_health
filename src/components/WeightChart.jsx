import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
// import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
// import { VictoryChart, VictoryLabel, VictoryLine, VictoryAxis, VictoryTheme, VictoryStack, VictoryScatter, VictoryVoronoiContainer, VictoryGroup, VictoryTooltip } from 'victory';

const petWeightRange = 
    {
      "Airedale terriers": "40–65",
      "Akitas": "75–115",
      "Alaskan malamutes": "70–95",
      "American Staffordshire terriers": "55–65",
      "Australian cattle dogs": "30–35",
      "Australian shepherds": "40–65",
      "Basenjis": "20–25",
      "Basset hounds": "45–65",
      "Beagles": "18–30",
      "Belgian Malinois": "55–75",
      "Bernese mountain dogs": "85–110",
      "Bichon frises": "7–12",
      "Bloodhounds": "80–110",
      "Border collies": "27–45",
      "Border terriers": "11–15",
      "Borzois": "60–100",
      "Boston": "10–25",
      "Bouviers des Flandres": "95–120",
      "Boxers": "50–75",
      "Brittany spaniels": "30–40",
      "Brussels": "6–12",
      "Bull terriers": "45–80",
      "Bull terriers miniature":  "24–32",
      "Bulldogs": "40–50",
      "Bullmastiffs": "100–130",
      "Cairn terriers": "13–18",
      "Cardigan Welsh corgis": "25–30",
      "Cavalier King Charles spaniels": "10–18",
      "Chesapeake Bay": "55–80",
      "Chihuahuas": "4–6",
      "Chinese crested": "8-10",
      "Chinese Shar-Pei": "45–60",
      "Chow Chows": "45–70",
      "Cocker spaniels": "23–28",
      "Collies": "50–70",
      "Dachshunds": "10–12",
      "Dachshunds mini": "8-10",
      "Dalmatians": "50–55",
      "Doberman pinschers": "65–90",
      "English cocker spaniels": "26–34",
      "English setters": "45–80",
      "English springer spaniels": "40–50",
      "Flat-Coated retrievers": "60–70",
      "French bulldogs": "20-28",
      "German shepherds": "75–95",
      "German shorthaired pointers": "45–70",
      "German wirehaired pointers": "60–70",
      "Giant schnauzers": "55–80",
      "Golden retrievers": "65–75",
      "Gordon setters": "45–80",
      "Great Danes": "110–180",
      "Great Pyrenees": "85–100",
      "Greater Swiss mountain dogs": "130–135",
      "Havanese": "7–12",
      "Irish setters": "55–75",
      "Irish wolfhounds": "90–150",
      "Italian greyhounds": "6–10",
      "Japanese Chin": "4–15",
      "Keeshond": "35–45",
      "Labrador": "65–80",
      "Lhasa": "13–15",
      "Maltese": "4–6",
      "Mastiffs": "150–160",
      "Miniature pinschers": "8–10",
      "Miniature schnauzers": "12–15",
      "Newfoundlands": "100–150",
      "Norwegian elkhounds": "40–60",
      "Norwich": "10–12",
      "Nova Scotia duck tolling retrievers": "37–50",
      "Old English sheepdogs": "60–100",
      "Papillons": "7–10",
      "Parson Russell terriers (Jack Russell terriers)": "14–18",
      "Pekingese": "8–10",
      "Pembroke Welsh corgis": "23–27",
      "Pomeranians": "4–7",
      "Poodles": "45–65",
      "Poodles miniture": "11-17",
      "Portuguese water dogs": "35–55",
      "Pugs": "13–18",
      "Rhodesian ridgebacks": "65–90",
      "Rottweilers": "70–135",
      "Samoyeds": "35–65",
      "Schipperkes": "12–18",
      "Scottish terriers": "18–21",
      "Shetland sheepdogs": "18–20",
      "Shiba Inu": "15–25",
      "Shih Tzu": "8–16",
      "Siberian huskies": "35–60",
      "Silky terriers": "8–11",
      "Soft-Coated Wheaten terriers": "30–45",
      "Saint Bernards": "110–200",
      "Staffordshire bull terriers": "23–38",
      "Standard schnauzers": "30–45",
      "Tibetan terriers": "20–24",
      "Toy fox terriers": "4–7",
      "Vizsla": "45–60",
      "Weimaraners": "50–70",
      "Welsh terriers": "20–21",
      "West Highland": "13–21",
      "Whippets": "25–45",
      "Wirehaired fox terriers": "13–20",
      "Yorkshire terriers": "7",
      "Domestic Cat": "8–10",
      "Persian": "7–12",
      "Siamese": "5–10",
      "Maine Coon": "10–25"
    }
    for (const key in petWeightRange) {
      const rangeArray = petWeightRange[key].split('–');
      petWeightRange[key] = rangeArray; 
    }
    
    // console.log(petWeightRange)

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Leonard',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [5, 5, 8, 12, 15, 25, 25]
        }],
      }
        const options = {
        annotation: {
          drawTime: 'afterDatasetsDraw',
          annotations: [{
            id: 'a-line-1', // optional
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 5,
            borderColor: 'red',
            borderWidth: 2,
          }, {
            id: 'a-line-2', // optional
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 10,
            borderColor: 'red',
            borderWidth: 2,
          }]
      }
    };
    

class WeightChart extends React.Component {
  constructor (props) {
    super(props)
  const currentBreed = this.props.pet.breed;
  //placeholder if statement -- will be changed
  for (let eachPet in petWeightRange) {
    if (currentBreed === eachPet) {
      const minWeight = petWeightRange[currentBreed][0];
      const maxWeight = petWeightRange[currentBreed][1];
      options.annotation.annotations[0].value = minWeight;
      options.annotation.annotations[1].value = maxWeight;
    } else {
      const minWeight = 10;
      const maxWeight = 20;
      options.annotation.annotations[0].value = minWeight;
      options.annotation.annotations[1].value = maxWeight;
    }
  }
  
  const id = this.props.pet.id;
  

  // ajax based on this.props.pet.id
  // get history table 
  }
  render() {
    return (
      <div>
        <h1>Weight Over Time</h1>
        <Line data={data} options={options} />
      </div>
    );
  }
}




export default WeightChart;