import React, { Component } from 'react';
import axios from 'axios'
import './smurf-form.css'
const SmurfForm = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     newSmurf: {
  //       name: '',
  //       age: 0,
  //       height: ''
  //     }
  // }
  // }
  // addSmurf = event => {
  //   event.preventDefault();
  //   // add code to create the smurf using the api
  //   axios.post('http://localhost:3333/smurfs', this.state.newSmurf )
  //     .then(response => {
  //       this.setState({
  //         name: '',
  //         age: '',
  //         height: ''    
  //       })
  //     })
  //   this.props.history.push('/')
  // }

  // handleInputChange = e => {
  //   e.persist()
  //   const { name, value } = e.target
  //   this.setState(previousState => {
  //     return {
  //       newSmurf: {
  //         ...previousState.newSmurf,
  //         [name]: value
  //       }
  //     }
  //   })
  // };

    return (
      <div className="smurf-form">
        <form onSubmit={props.addSmurf}>
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  
}

export default SmurfForm;
