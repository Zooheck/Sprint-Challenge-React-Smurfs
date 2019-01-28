import React, { Component } from 'react';
import axios from 'axios'
import './smurf-form.css'
const SmurfForm = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (props.isUpdatingSmurf) {
      props.updateSmurf();
    } else {
      props.addSmurf();
    }
  }
    return (
      <div className="smurf-form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={props.handleInputChange}
            placeholder="name"
            value={props.newName}
            name="name"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="age"
            value={props.newAge}
            name="age"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="height"
            value={props.newHeight}
            name="height"
          />
          <button type="submit">{props.isUpdatingSmurf ? 'Update Smurf' : 'Add to the village'}</button>
        </form>
      </div>
    );
  
}

export default SmurfForm;
