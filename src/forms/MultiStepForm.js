import React from 'react';
class MultiStepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      stateinUS: '',
      currentStep: 1
    };

    this.handleChangeUSState = this.handleChangeUSState.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeUSState = this.handleChangeUSState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChangeUSState(event) {
    this.setState({ stateinUS: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value })
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value })
  }

  handleSubmit(event) {
    var outDict = {
      "Name" : this.state.name,
      "Email" : this.state.email,
      "State" : this.state.stateinUS
    }
    alert('Your Form Info is: ' + JSON.stringify(outDict));
    event.preventDefault();
  }

  renderNameInput() {
    return(<label>
      Name:
      <input type="text" value={this.state.name} onChange={this.handleChangeName} />
    </label>)
  }

  renderEmailInput() {
    return(<label>
      Email:
      <input type="text" value={this.state.email} onChange={this.handleChangeEmail} />
    </label>)
  }

  renderStateSelect() {
    return (
      <label>
      Pick your State:
        <select value={this.state.stateinUS} onChange={this.handleChangeUSState}>
        <option value="">Select a State...</option>
        <option value="GA">Georgia</option>
        <option value="TX">Texas</option>
        <option value="NY">New York</option>
        <option value="CA">California</option>
      </select>
    </label>
    )
  }

  renderNavButton() {
    if(this.state.currentStep === 1) {
      return (<button onClick={() => this.setState({currentStep:2})}>NEXT</button>)
    } else if (this.state.currentStep === 2) {
      return (<div>
        <button onClick={() => this.setState({currentStep:1})}>PREV</button>
        <button onClick={() => this.setState({currentStep:3})}>NEXT</button>
      </div>
      )
    } else if (this.state.currentStep === 3) {
      return(<input type="submit" value="Submit" />)
    } 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.currentStep === 1 && this.renderNameInput()}
        {this.state.currentStep === 2 && this.renderEmailInput()}
        {this.state.currentStep === 3 && this.renderStateSelect()}
        {this.renderNavButton()}
      </form>
    );
  }
}

export default MultiStepForm;