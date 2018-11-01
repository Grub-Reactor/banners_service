import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nameview">
        <ul>{this.props.name}</ul>
      </div>
    )
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};
 
export default Name;