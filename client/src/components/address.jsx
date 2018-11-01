import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <div className="addressview"> 
        <ul>{this.props.address}</ul>
      </div>
    )
  }
}

Address.propTypes = {
  address: PropTypes.string.isRequired,
}
 
export default Address;