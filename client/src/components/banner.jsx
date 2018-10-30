import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    };
    fetch('http://localhose:3005/restaurants/id/banners')
      .then(responses => response.json())
      .then(banners => (this.setState({items})))
  }
  render() { 
    return (
      <div>
        Hello
        <ul>
          {this.state.banners.map(banner => 
          <li>
            <h2>{banner.name}</h2>
          </li>)}
        </ul>
      </div>
    );
  }
}
 
export default Banner;