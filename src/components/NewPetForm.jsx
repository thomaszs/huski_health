import React, {Component} from 'react';
import CheckBox from './CheckBox';
import SingleInput from './SingleInput';

class NewPetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      speciesOptions: ["dog", "cat"],
      species: [],
      genderOptions:["male", "female"],
      gender: [],
      birthday: "",
      weight: "",
      breed: "",
      image: "",
    };
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handlePetNameChange = this.handlePetNameChange.bind(this);
    this.handleSpeciesSelection = this.handleSpeciesSelection.bind(this);
    this.handleGenderSelection = this.handleGenderSelection.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
  }
  // componentDidMount() {
	// 	fetch('./fake_db.json')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			this.setState({
  //         petName: data.petName,
  //         speciesOptions: data.speciesOptions,
  //         species: data.species,
  //         genderOptions: data.genderOptions,
  //         gender: data.gender,
	// 				birthday: data.birthday,
	// 				weight: data.weight,
	// 				breed: data.breed,
	// 				image: data.image,
	// 			});
  //     });
  //   }
      handlePetNameChange(e) {
        this.setState({ petName: e.target.value }, () => console.log('name:', this.state.petName));
      }
      handleSpeciesSelection(e) {
        this.setState({ species: [e.target.value] }, () => console.log('species', this.state.species));
      }
      handleGenderSelection(e) {
        this.setState({ gender: [e.target.value] }, () => console.log('gender', this.state.gender));
      }
      handleBirthdayChange(e) {
        this.setState({ birthday: e.target.value }, () => console.log('birthday:', this.state.birthday));
      }
      handleWeightChange(e) {
        this.setState({ weight: e.target.value }, () => console.log('weight:', this.state.petName));
      }
      handleBreedChange(e) {
        this.setState({ breed: e.target.value }, () => console.log('breed:', this.state.breed));
      }
      handleImageChange(e) {
        this.setState({ image: e.target.value }, () => console.log('image:', this.state.image));
      }
      handleClearForm(e) {
        e.preventDefault();
        this.setState({
          petName: "",
          species: [],
          gender:[],
          birthday: "",
          weight: "",
          breed: "",
          image: "",
        });
      }
      handleFormSubmit(e) {
        e.preventDefault();
    
        const submit = {
          petName: this.state.petName,
          species: this.state.species,
          gender: this.state.gender,
          birthday: this.state.birthday,
          weight: this.state.weight,
          breed: this.state.breed,
          image: this.state.image
        };
    
        console.log('Send this in a POST request:', submit);
        this.handleClearForm(e);
      }
      render() {
        return (
          <form className="container" onSubmit={this.handleFormSubmit}>
				<h5>Add a new pet!</h5>
				<SingleInput
					inputType={'text'}
					title={'Pet name'}
					name={'name'}
					controlFunc={this.handlePetNameChange}
					content={this.state.petName}
					placeholder={'Type in your furry friend\'s name'} />

        <CheckBox
					title={'Is your pet a dog or a cat?'}
					setName={'species'}
					controlFunc={this.handleSpeciesSelection}
					type={'radio'}
					options={this.state.speciesOptions}
					selectedOptions={this.state.species} />

        <CheckBox
					title={'Is your pet a boy or a girl?'}
					setName={'gender'}
					controlFunc={this.handleGenderSelection}
					type={'radio'}
					options={this.state.genderOptions}
					selectedOptions={this.state.gender} />
        
				<SingleInput
          inputType={'text'}
          title={'Birthday'}
          birthday={'birthday'}
					controlFunc={this.handleBirthdayChange}
					content={this.state.birthday}
					placeholder={'Enter your pet\'s birthday'} />
        
				<SingleInput
					inputType={'text'}
					title={'Weight'}
					name={'weight'}
					controlFunc={this.handleWeightChange}
					content={this.state.weight}
					placeholder={'Enter your pet\'s weight'} />

        	<SingleInput
					inputType={'text'}
					title={'Breed'}
					name={'breed'}
					controlFunc={this.handleBreedChange}
					content={this.state.breed}
					placeholder={'Enter your pet\'s breed'} />

          <SingleInput
					inputType={'text'}
					title={'Image'}
					name={'image'}
					controlFunc={this.handleImageChange}
					content={this.state.image}
          placeholder={'Upload your furry friend\'s photo'} />

				<input
					type="submit"
					className="btn btn-primary float-right"
					value="Submit"/>
				<button
					className="btn btn-link float-left"
					onClick={this.handleClearForm}>Clear form</button>
			</form>
        )
      }
	}

export default NewPetForm;

