import React, { Component } from 'react';
import Trainers from './componments/trainers/Trainers';
import Trainees from './componments/trainees/Trainees';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Trainers />
        <Trainees />
      </div>
    );
  }
}

export default App;
