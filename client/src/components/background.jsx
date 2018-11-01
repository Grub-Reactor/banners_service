import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Background extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return (
      <div className="bgview">
          <img src="https://s3-us-west-1.amazonaws.com/banner.content/background.jpg" />
      </div>
    )
  }
}

export default Background;