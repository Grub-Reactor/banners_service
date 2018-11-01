import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <div className="ratingview"> 
        <ul>{this.props.rating}</ul>
      </div>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
 
export default Rating;