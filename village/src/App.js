import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar'
const blankSmurf = {
  name: '',
  age: 0,
  height: ''
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      newSmurf: {
        name: '',
        age: 0,
        height: ''
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
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
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs', this.state.newSmurf )
      .then(response => {
        this.setState({
          smurfs: response.data,
          newSmurf: blankSmurf
        })
      })
    this.props.history.push('/')
  }
  componentDidMount = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response.data)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { name, age, height } = this.state.newSmurf
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs}/>}/>
        <Route path="/add-smurf" render={props => <SmurfForm {...props} handleInputChange={this.handleInputChange} addSmurf={this.addSmurf} newName={name} newAge={age} newHeight={height}/>}/>
      </div>
    );
  }
}

export default App;
