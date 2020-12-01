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
// TODO GTB-知识点: - 这个方法写在这里，但是你并没有把它放入任何的生命周期函数里面去调用。所以，你这个方法里面的逻辑是不会被执行的

  getAllUnGroupedTrainers = () => {
      // TODO GTB-工程实践: - API请求d的逻辑应该被抽取到单独的utils文件，而不是只是URL
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
        {/*   // TODO GTB-知识点: state.trainers是一个array，它应该给Trainers组件使用，而不是Trainer组件-*/}
        <Trainer trainers={this.state.trainers} />
        <input className="trainers-input" placeholder="+添加讲师" />
      </div>
    );
  }
}

export default Trainers;
