import React, { Component } from 'react';

import Smurf from './Smurf';
import './smurf-list.css'
class Smurfs extends Component {
  render() {
    return (
      <div className="smurf-village">
        <h1>Smurf Village</h1>
        <div className="smurf-list-container">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
