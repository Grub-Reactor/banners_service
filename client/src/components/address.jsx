import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <span className="addressview"> 
        <ul>{this.props.address}</ul>
      </span>
    )
  }
}

Address.propTypes = {
  address: PropTypes.string.isRequired,
}
 
export default Address;