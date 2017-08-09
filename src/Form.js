import React, { Component } from 'react';
import './App.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', nos: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.id === 'name')
      this.setState({name: event.target.value});
    if(event.target.id === 'nos')
      this.setState({nos: event.target.value});
  }

  handleSubmit(event) {
    alert('Values submitted: ' + this.state.name + this.state.nos);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
        <input id="nos" type="text" value={this.state.nos} onChange={this.handleChange} />
        <input type="submit" value="Start Selecting" />
      </form>
    );
  }
}

export default Form;
