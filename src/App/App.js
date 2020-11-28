import React, { Component } from 'react';
import Trainers from './componments/trainers/Trainers';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Trainers />
      </div>
    );
  }
}

export default App;
