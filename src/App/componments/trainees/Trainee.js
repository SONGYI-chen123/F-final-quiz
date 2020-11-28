import React from 'react';
import './Trainees.css';

const Trainee = ({ trainees }) => {
  trainees.map((item) => (
    <div key={item.id} className="trainees-input">
      {`${item.id}.${item.name}`}
    </div>
  ));
};

export default Trainee;
