import React, { Component } from 'react';
import './Trainees.css';

class Trainees extends Component {
  render() {
    return (
      <div className="trainees">
        <h1>成员列表</h1>
        <input className="trainees-input" type="text" value="1.成吉思汗" />
        <input className="trainees-input" placeholder="+添加成员" />
      </div>
    );
  }
}

export default Trainees;
