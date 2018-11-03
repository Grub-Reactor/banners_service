import React from "react";
import axios from "axios";
import Bookshare from "./bookshare.jsx";
import Logo from "./logo.jsx";
import Name from "./name.jsx";
import Address from "./address.jsx";
import Contact from "./contact.jsx";
import Rating from "./rating.jsx";
import Reviews from "./reviews.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurant: null,
    };
  }

  componentDidMount() {

    axios.get("/restaurants/banners/rest_id")
    .then(({ data }) => {
      this.setState({ restaurant: data[0] });
    });
  }

  render () {
    
    return (
      <div className="view">

      {
        this.state.restaurant ? (
          <div>
          <Bookshare />
          <Logo /> 
          <Name name={this.state.restaurant.name} />
          <Address address={this.state.restaurant.address} />
          <Contact ph_number={this.state.restaurant.ph_number} />
          <Rating rating={this.state.restaurant.rating} /> 
          <Reviews no_of_ratings={this.state.restaurant.no_of_ratings} /> 
          
        </div>) :
        <div> ...loading</div>
      }
        
      </div>
    );
    
  }
}

export default App;