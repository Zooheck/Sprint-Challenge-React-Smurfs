import React from 'react';
import './smurf-list.css'
const Smurf = props => {
  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <div onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

