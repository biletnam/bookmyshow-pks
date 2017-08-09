import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
