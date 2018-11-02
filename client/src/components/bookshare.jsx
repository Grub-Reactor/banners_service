import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Bookshare extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (
      <div className="bsview">
          <i className="fas fa-bookmark"></i><i className="fas fa-share-alt-square"></i>
      </div>
    )
  }
}

export default Bookshare;