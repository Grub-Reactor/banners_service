import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (
      <img className = "logoview" src="https://s3-us-west-1.amazonaws.com/banner.content/logo.png" />
    )
  }
}
 
export default Logo;