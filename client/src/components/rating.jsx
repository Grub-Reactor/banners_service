import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <div className="ratingview">
        <a className="stars" href="#">
        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
        </a>
        <div className="push popover__content">
          <img className="popimage" src="https://s3-us-west-1.amazonaws.com/banner.content/Grub-Popup.png" />
        </div>
      </div>
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}
 
export default Rating;