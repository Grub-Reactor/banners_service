import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <span className="ratingview"> 
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
        {/* <ul>{this.props.rating}</ul> */}
      </span>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
 
export default Rating;