import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  //proceed to the next step
  nextStep = () => {
    //destructuring - pulling out step and storing it in a variable
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //go to the previous step
  prevStep = () => {
    //destructuring - pulling out step and storing it in a variable
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  //handle change within the fields
  handleChange = input => e => {
    //set 'input' to to value of the input field
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    //we can pass the values into each component & render them in the inputs
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>Success</h1>;
    }
  }
}

export default UserForm;
