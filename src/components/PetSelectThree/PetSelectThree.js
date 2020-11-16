import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Three.css'

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PetThree extends Component {
  state = {
    temperament: 'Angry',
    name: ''
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/4');
  }

  prevPage = () => {
    console.log('clicked');
    this.props.history.push('/2');
  }

  selectPet = () => {
    if(this.state.name === '' || this.state.name === null || this.state.name === undefined) {
      alert('Please enter a name.')
    }
    else {
            console.log('selected', this.state.temperament);
      this.props.dispatch( {type: 'SELECT_PET', payload: this.state})
    }
  }

  handleChange = (event, typeParam) => {
    this.setState( {
        ...this.state,
        [typeParam]: event.target.value
    });
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <h2>{this.state.temperament}</h2>
        <p className="petthree"></p>
        <p>Do not be frightened of angry Z-Pets!</p>
        <p>As long as they channel their emotions correctly they can be very passionate critters.</p>
        <button onClick={this.prevPage}>View previous pet</button>
        <input onChange={(event) => this.handleChange(event, 'name')} type="text" placeholder="Give it a name!"></input>
        <button onClick={this.nextPage}>View next pet</button>
        <br/>
        <button onClick={this.selectPet}>Select this Pet!</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetThree);