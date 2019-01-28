import React, { Component } from 'react';

import Smurf from './Smurf';
import './smurf-list.css'
const Smurfs = (props) => {

    return (
      <div className="smurf-village">
        <h1>Smurf Village</h1>
        <div className="smurf-list-container">
          {props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                populateForm={props.populateForm}
                deleteSmurf={props.deleteSmurf}
              />
            );
          })}
        </div>
      </div>
    );
  }


Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
