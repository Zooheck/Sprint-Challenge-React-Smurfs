import React, { Component } from 'react';
import axios from 'axios'
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSmurf: {
        name: '',
        age: 0,
        height: ''
      }
    //   name: '',
    //   age: '',
    //   height: ''
    // };
  }
  }
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state.newSmurf )
      .then(response => {
        this.setState({
          name: '',
          age: '',
          height: ''    
        })
      })
  }

  handleInputChange = e => {
    e.persist()
    const { name, value } = e.target
    this.setState(previousState => {
      return {
        newSmurf: {
          ...previousState.newSmurf,
          [name]: value
        }
      }
    })
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
