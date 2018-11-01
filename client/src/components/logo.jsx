import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Logo extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (
      <div className="logoview"> 
          <img src="https://s3-us-west-1.amazonaws.com/banner.content/logo.png" />
      </div>
    )
  }
}
 
export default Logo;