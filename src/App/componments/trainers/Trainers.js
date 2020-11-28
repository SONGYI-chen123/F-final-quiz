import React, { Component } from 'react';
import './Trainers.css';
import { myHeaders, trainerApi } from '../api/api';
import Trainer from './Trainer';

class Trainers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainers: [],
    };
  }

  getAllUnGroupedTrainers = () => {
    fetch(trainerApi, {
      method: 'GET',
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          trainers: data,
        });
      });
  };

  render() {
    return (
      <div className="trainers">
        <h1>讲师列表</h1>
        <Trainer trainers={this.state.trainers} />
        <input className="trainers-input" placeholder="+添加讲师" />
      </div>
    );
  }
}

export default Trainers;
