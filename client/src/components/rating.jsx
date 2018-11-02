import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <span className="ratingview"> 
        <ul>{this.props.rating}</ul>
      </span>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
 
export default Rating;