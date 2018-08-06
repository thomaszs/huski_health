import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const theme = {
  background: '#1E212F',
  fontFamily: 'Trebuchet MS',
  headerBgColor: '#FF9400',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#FF9400',
  botFontColor: '#fff',
  userBubbleColor: '#FF9400',
  userFontColor: '#fff',
};

const BMI = (props) => {
  const { steps } = props;
  const height = steps.height.value;
  const weight = steps.weight.value;
  const bmi = ((((weight / height))).toFixed(1));
  let result = 'Underweight';

  if (bmi >= 0.8 && bmi < 2.5) {
    result = 'Normal weight';
  } else if (bmi >= 2.5) {
    result = 'Overweight';
  }

  return (
    <div className="test">
      Your pet's BMI is {bmi} ({result})
    </div>
  );
};

BMI.propTypes = {
  steps: PropTypes.object,
};

BMI.defaultProps = {
  steps: undefined,
};

class Example extends Component {
  state = {
    opened: false
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  }

  render() {
    const { opened } = this.state;
    function validator(value) {
      if (isNaN(value)) {
        return 'value should be a number';
      } else if (value < 0) {
        return 'value should be positive';
      }

      return true;
    }

    const steps = [
      {
        id: '1',
        message: 'Welcome to Huski Health!',
        trigger: '2',
      },
      {
        id: '2',
        message: 'Let\'s calculate your pet\'s BMI',
        trigger: '3',
      },
      {
        id: '3',
        message: 'Please type your pet\'s height (inches)',
        trigger: 'height',
      },
      {
        id: 'height',
        user: true,
        trigger: '4',
        validator,
      },
      {
        id: '4',
        message: 'Please type your pet\'s weight (lbs)',
        trigger: 'weight',
      },
      {
        id: 'weight',
        user: true,
        trigger: '5',
        validator,
      },
      {
        id: '5',
        message: 'Thanks! Check out the BMI for your pet',
        trigger: '6',
      },
      {
        id: '6',
        component: <BMI />,
        trigger: '7',
      },
      {
        id: '7',
        message: 'Is your pet underweight or overweight?',
        trigger: '8',
      },
      {
        id: '8',
        options: [
          { value: 1, label: 'Underweight', trigger: '9' },
          { value: 2, label: 'Overweight', trigger: '12' },
          { value: 3, label: 'Normal weight', trigger: '15' },
          { value: 4, label: 'Find a Vet', trigger: '16' },
        ],
      },
      {
        id: '9',
        message: '* Record your dog’s weight. If you believe that your dog is underweight, you need to begin keeping track of the dog’s weight so that you can track the dog’s weight loss, and then his weight gain as you implement weight-gaining strategies. Be sure to share this information with your vet.',
        trigger: '10',
      },
      {
        id: '10',
        message: '* Deworm your pet. It is best to have your vet do a fecal test for intestinal parasites, but if you are unable to do that, you can diagnose and treat your dog for worms from home. A dog that has an intestinal parasite infection may be underweight because the parasite is sapping the nutrition out of the dog’s food before the dog is able to process it.',
        trigger: '11',
      },
      {
        id: '11',
        message: '* Add an extra meal into your dog\'s daily diet. If you feed your dog once a day, add a second meal. If your dog is already fed morning and evening, add a meal during the middle of the day. Do not necessarily change the diet you are already feeding, simply add one more meal to the day to add calories.',
        end: true,
      },
      {
        id: '12',
        message: '* Swap for fruits and veggies. Use pet-safe fruits and veggies as treats and to supplement your pet’s smaller-portioned meals.2 Not only do they provide nutrition, they can also help your pet feel fuller without all of the calories.',
        trigger: '13',
      },
      {
        id: '13',
        message: '* Portion control starts with calorie counting. Talk to your veterinarian about your pet’s caloric needs and measure portions of food for your pet instead of free pouring or “eye-balling” it. Be sure that everyone in the family who feeds your pet uses the same measuring scoop!',
        trigger: '14',
      },
      {
        id: '14',
        message: '* Cut back on snacking between meals. The calories in common treats for pets can really add up; they should only make up about 10% of your pet’s caloric intake. Cut up small pieces of fruits and veggies, such as apples, carrots, or bananas for yummy treats with fewer calories.',
        end: true,
      },
      
      {
        id: '15',
        message: 'Good job! Please keep using our app to keep on track on your furry friend\'s health!',
        end: true,
      },
      {
        id: '16',
        component: (
          <div><a href="/vets">Click here for Vet info</a> </div>
        ),
        asMessage: true,
        end: true,
      },
    ];

    return (
      <ThemeProvider theme={theme}>
      <ChatBot
        steps={steps}
        floating={true}
        opened={opened}
        toggleFloating={this.toggleFloating}
        botAvatar={'https://i.imgur.com/HC8GXjo.png'}
        floatingStyle={{
          right: 'initial',
          transformOrigin: 'left',
        }}
      />
        </ThemeProvider>
    )
  }
}

export default Example;