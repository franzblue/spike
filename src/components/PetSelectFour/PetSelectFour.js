import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Four.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PetFour extends Component {
  state = {
    temperament: 'Aloof',
    name: ''
  };

  prevPage = () => {
    console.log('clicked');
    this.props.history.push('/3');
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
        <p className="petfour"></p>
        <p>How cute!</p>
        <p>This lil guy has no idea what's going on, huh?</p>
        <button onClick={this.prevPage}>View previous pet</button>
        <input onChange={(event) => this.handleChange(event, 'name')} type="text" placeholder="Give it a name!"></input>
        <br/>
        <button onClick={this.selectPet}>Select this Pet!</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetFour);