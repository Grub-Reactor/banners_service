import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reviews extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <div className="reviews"> 
        <ul>{this.props.no_of_ratings}</ul>
      </div>
    )
  }
}

Reviews.propTypes = {
  no_of_ratings: PropTypes.number.isRequired,
}
 
export default Reviews;