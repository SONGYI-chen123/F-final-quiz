import React from 'react';
import './Trainers.css';

const Trainer = ({ trainers }) => {
  trainers.map((item) => (
    <div key={item.id} className="trainers-input">
      {`${item.id}.${item.name}`}
    </div>
  ));
};

export default Trainer;
