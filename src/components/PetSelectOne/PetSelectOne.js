import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './One.css';

class PetOne extends Component {
  state = {
    temperament: 'Happy',
    name: ''
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/2');
  }

  prevPage = () => {
    console.log('clicked');
    this.props.history.push('/pethomepage');
  }

  selectPet = () => {
    if(this.state.name === '' || this.state.name === null || this.state.name === undefined) {
      alert('Please enter a name.');
    }
    else {
            console.log('selected', this.state.temperament);
      this.props.dispatch( {type: 'SELECT_PET', payload: this.state})
      alert('Congrats on the new pet!');
      this.props.history.push('/nest');
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
        <p className='happy'></p>
        <p>Happy Z-Pets love to play and frolic outdoors.</p>
        <p>They also tell the best jokes!</p>
        <button onClick={this.prevPage}>Back to HomePage</button>
        <input onChange={(event) => this.handleChange(event, 'name')} type="text" placeholder="Give it a name!"></input>
        <button onClick={this.nextPage}>View next pet</button>
        <br/>
        <button onClick={this.selectPet}>Select this Pet!</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetOne);
