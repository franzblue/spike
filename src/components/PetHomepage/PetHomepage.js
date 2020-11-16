import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PetHomepage extends Component {
  state = {
    heading: 'Welcome!',
  };

  nextPage = () => {
    console.log('clicked');
    this.props.history.push('/1');
  }

  render() {
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <button onClick={this.nextPage}>Ready to Choose Pet!</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetHomepage);
