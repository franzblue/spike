import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class NestItem extends Component {

    componentDidMount = () => {
        this.getPet();
      }
    
      getPet = () => {
        console.log('get pet');
        this.props.dispatch( {type:'GET_PET'});
      }

      onOrOffDuty = () => {
        if(this.props.store.pet.temperament === "Happy") {
            // need to return JSX
            return <p className="happy">happy</p>;
        } else if(this.props.store.pet.temperament == "Sad") {
            // need to return JSX
            return <p className="sad">sad</p>;
        } else if(this.props.store.pet.temperament === "Angry") {
            // need to return JSX
            return <p className="angry">angry</p>;
        } else if(this.props.store.pet.temperament === "Aloof") {
            // need to return JSX
            return <p className="aloof">aloof</p>;
        } else {
            // need to return JSX
            return  <p>SLEEPING</p>;
        }
    }

  render() {
    return (
      <div>
          {JSON.stringify(this.props.store.pet)}
          { this.onOrOffDuty() }

        <img src={this.props.store.pet.img}/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NestItem);
