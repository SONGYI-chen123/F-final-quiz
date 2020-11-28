import React, { Component } from 'react';
import './Trainees.css';
import { myHeaders, traineeApi } from '../api/api';
import Trainee from './Trainee';

class Trainees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    };
  }

  getAllUnGroupedTrainees = () => {
    fetch(traineeApi, {
      method: 'GET',
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          trainees: data,
        });
      });
  };

  render() {
    return (
      <div className="trainees">
        <h1>成员列表</h1>
        <Trainee trainees={this.state.trainees} />
        <input className="trainees-input" placeholder="+添加成员" />
      </div>
    );
  }
}

export default Trainees;
