import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <div className="contactview">
        <ul>{this.props.ph_number}</ul>
      </div>
    )
  }
}

Contact.propTypes = {
  ph_number: PropTypes.string.isRequired,
}
 
export default Contact;