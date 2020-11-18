import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './Nest.css';

class Nest extends Component {

  componentDidMount = () => {
    this.getPet();
  }

  getPet = () => {
    console.log('get pet');
    this.props.dispatch( {type:'GET_PET'});
  }

  render() {
    return (
      <div>
        <div className="petinfo">
            <p>Z-Pet Name: {this.props.store.pet.name}</p>
            <p>Birthday: {this.props.store.pet.birthday}</p>
            <p>Temperament: {this.props.store.pet.temperament}</p>
            <p>Health: {this.props.store.pet.health * 2}</p>
            <p>Energy: {this.props.store.pet.energy}</p>
            <p>Owner: {this.props.store.pet.username}</p>
            {/* <p className={`${this.props.store.pet.temperament ? "sad" : ""}`}></p> */}
            

        {/* <>
            {this.props.store.pet.map((pet) => {
                return <img src={pet.img}/>
            })}
            </> */}

            {/* // <img src="https://cdn.wallpapersafari.com/13/67/75Wmsl.jpg"></img> */}
            
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(Nest);
