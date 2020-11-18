import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class NestItem extends Component {

  render() {
    return (
      <div>
        <img src='https://images-na.ssl-images-amazon.com/images/I/61NjfGKpeDL._AC_SL1000_.jpg'/>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NestItem);
