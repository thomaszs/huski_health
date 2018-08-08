import React from 'react';
import {Line} from 'react-chartjs-2';
import 'chartjs-plugin-annotation';
import $ from 'jquery';

const petWeightRange = 
    {
      "Airedale Terrier": [40, 65],
      "Akita": [75, 11],
      "Alaskan Malamute": [70, 95],
      "American Eskimo Dog": [18, 35],
      "American Staffordshire Terrier": [55, 65],
      "Australian Cattle Dog": [30, 35],
      "Australian Shepherd": [40, 65],
      "Basenji": [20, 25],
      "Basset Hound": [45, 65],
      "Beagle": [18, 30],
      "Belgian Malinois": [55, 75],
      "Bernese Mountain Dog": [85, 11],
      "Bichon Frise": [7, 12],
      "Bloodhound": [80, 11],
      "Boerboel": [100, 130],
      "Border Collie": [27, 45],
      "Border Terrier": [11, 15],
      "Borzoi": [60, 10],
      "Boston Terrier": [10, 25],
      "Bouviers Des Flandres": [95, 12],
      "Boxer": [50, 75],
      "Briard": [95, 120],
      "Brittany": [30, 40],
      "Brussels Griffon": [6, 12],
      "Bull Terrier": [45, 80],
      "Bull Terriers Miniature": [24, 32],
      "Bulldog": [40, 50],
      "Bullmastiff": [100, 13],
      "Cairn Terrier": [13, 18],
      "Cardigan Welsh Corgi": [25, 30],
      "Cavalier King Charles Spaniel": [10, 18],
      "Chesapeake Bay Retriever": [55, 80],
      "Chihuahua": [4, 6],
      "Chinese Crested": [8, 10],
      "Chinese Shar-Pei": [45, 60],
      "Chow Chow": [45, 70],
      "Cocker Spaniel": [23, 28],
      "Collie, Rough or Smooth": [50, 70],
      "Dachshund": [10, 12],
      "Dachshund mini": [8, 10],
      "Dalmatian": [50, 55],
      "Doberman Pinscher": [65, 90],
      "English Cocker Spaniel": [26, 34],
      "English Setter": [45, 80],
      "English Springer Spaniel": [40, 50],
      "Flat-Coated Retriever": [60, 70],
      "French Bulldog": [20, 28],
      "German Shepherd": [75, 95],
      "German Shorthaired Pointer": [45, 70],
      "German Wirehaired Pointer": [60, 70],
      "Giant Schnauzer": [55, 80],
      "Golden Retriever": [65, 75],
      "Gordon Setter": [45, 80],
      "Great Dane": [110, 18],
      "Great Pyrenees": [85, 10],
      "Greater Swiss Mountain Dog": [130, 13],
      "Havanese": [7, 12],
      "Irish Setter": [55, 75],
      "Irish Wolfhound": [90, 15],
      "Italian Greyhound": [6, 10],
      "Japanese Chin": [4, 15],
      "Keeshond": [35, 45],
      "Labrador": [65, 80],
      "Lhasa": [13, 15],
      "Maltese": [4, 6],
      "Mastiff": [150, 16],
      "Miniature Pinscher": [8, 10],
      "Miniature Schnauzer": [12, 15],
      "Newfoundland": [100, 15],
      "Norwegian Elkhound": [40, 60],
      "Norwich Terrier": [10, 12],
      "Nova Scotia Duck Tolling Retriever": [37, 50],
      "Old English Sheepdog": [60, 10],
      "Papillon": [7, 10],
      "Parson Russell Terrier": [14, 18],
      "Pekingese": [8, 10],
      "Pembroke Welsh Corgi": [23, 27],
      "Pomeranian": [4, 7],
      "Poodle": [45, 65],
      "Poodle miniture": [11-17],
      "Portuguese Water Dog": [35, 55],
      "Pug": [13, 18],
      "Rhodesian Ridgeback": [65, 90],
      "Rottweiler": [70, 13],
      "Samoyed": [35, 65],
      "Schipperke": [12, 18],
      "Scottish Terrier": [18, 21],
      "Shetland Sheepdog": [18, 20],
      "Shiba Inu": [15, 25],
      "Shih Tzu": [8, 16],
      "Siberian Husky": [35, 60],
      "Silky Terrier": [8, 11],
      "Soft-Coated Wheaten Terrier": [30, 45],
      "Saint Bernard": [110, 20],
      "Staffordshire Bull Terrier": [23, 38],
      "Standard Schnauzer": [30, 45],
      "Tibetan Terrier": [20, 24],
      "Toy Fox Terrier": [4, 7],
      "Vizsla": [45, 60],
      "Weimaraner": [50, 70],
      "Welsh Terrier": [20, 21],
      "West Highland": [13, 21],
      "Whippet": [25, 45],
      "Wirehaired Fox Terrier": [13, 20],
      "Yorkshire Terrier": [7],
      "Domestic Cat": [8, 10],
      "Persian": [7, 12],
      "Siamese": [5, 10],
      "Maine Coon": [10, 25],
      "Egyptian Mau": [12, 18]
    }

    const graphSettings = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label: "",
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
          legend : {
            labels : {
              fontColor: '#B1B298'
            }
          },
        annotation: {
          drawTime: 'afterDatasetsDraw',
          annotations: [{
            label: {
              content: "Suggested ideal minimum weight range",
              enabled: true,
              yPadding: 3,
              xPadding: 3,
              position: "right",
              backgroundColor: '#1E212F',
              yAdjust: -10,
              fontColor: 'rgba(75,192,192,1)'
            },
            id: 'a-line-1', // optional
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 5,
            borderColor: '#A00029',
            borderWidth: 2,
          }, {
            label: {
              content: "Suggested ideal maxium weight range",
              enabled: true,
              yPadding: 3,
              xPadding: 3,
              position: "right",
              backgroundColor: '#1E212F',
              yAdjust: 10,
              fontColor: 'rgba(75,192,192,1)'
            },
            id: 'a-line-2', 
            type: 'line',
            mode: 'horizontal',
            scaleID: 'y-axis-0',
            value: 10,
            borderColor: '#A00029',
            borderWidth: 2,
          }]
      }
    };
    

class WeightChart extends React.Component {
  constructor (props) {
    super(props);

    const { breed } = this.props.pet;
    const petRange = props.petWeightRange[breed];
    const { annotations } = props.options.annotation;

    if (petRange) {
      annotations[0].value = petRange[0] || 10;
      annotations[1].value = petRange[1] || 20;
    }

    this.state = { 
      defaultMinWeight: petRange ? petRange[0] : 10,
      defaultMaxWeight: petRange ? petRange[1] : 20,
      options: props.options,
      graphSettings: props.graphSettings,
      weight: this.props.pet.weight
    }; 

    this.getLatestGraphData = this.getLatestGraphData.bind(this);
  }
  componentWillMount() {
    this.getLatestGraphData();
  }

  getLatestGraphData() {
    const { pet: { id } = {} } = this.props;
    $.get(`http://localhost:8080/api/pets/${ id }/weights`)
    .then(data => {
      const { graphSettings } = this.state;
      const newWeight = [];
      for (let i of data) {
      newWeight.push(i.notes)
      }
      graphSettings.datasets[0].data = newWeight
      graphSettings.datasets[0].label = this.props.pet.name;
      this.setState({ graphSettings });

    })
    .catch(err => {
      console.log(err);
    });
  }
  render() {
    const { graphSettings, options } = this.state
    return (
      <div>
        <h1>Weight Over Time</h1>
        <Line data={graphSettings} options={options} />
      </div>
    );
  }
}
WeightChart.defaultProps = {
  petWeightRange,
  options,
  graphSettings
}

export default WeightChart;