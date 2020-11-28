import React, { Component } from 'react';
import './Trainers.css';

class Trainers extends Component {
  render() {
    return (
      <div className="trainers">
        <h1>讲师列表</h1>
        <input className="trainers-input" type="text" value="1.成吉思汗" />
        <input className="trainers-input" placeholder="+添加讲师" />
      </div>
    );
  }
}

export default Trainers;
