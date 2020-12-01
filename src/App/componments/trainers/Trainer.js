import React from 'react';
import './Trainers.css';

// TODO GTB-知识点: - 组件的职责没有弄清楚，Trainer应该是单个讲师组件，不应该负责做列表渲染的事情
const Trainer = ({ trainers }) => {
  // TODO GTB-知识点: - 你的这个方法没有return, 所以你其实没有把这个组件里面的东西返回出去
  trainers.map((item) => (
    <div key={item.id} className="trainers-input">
      {`${item.id}.${item.name}`}
    </div>
  ));
};

export default Trainer;