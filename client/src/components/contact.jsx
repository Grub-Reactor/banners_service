import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <span className="contactview">
        <ul>{this.props.ph_number}</ul>
      </span>
    );
  }
}

Contact.propTypes = {
  ph_number: PropTypes.string.isRequired,
};
 
export default Contact;