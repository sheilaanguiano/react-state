import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }


  // Write a function that returns 5 Star components
  renderStars = () => {
    let stars =[];
    let maxRating = 5;
    
    for(let i = 0; i < maxRating; i++){
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          //We're giving setRatint a callback prop
          setRating={() => this.handleSetRating(i+ 1)}
          key={i}
       /> 
      );
    }
    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props

//This function will be paseed down to each Star component via props
//and called when a user clicks on a star

  handleSetRating = (rating) => {
    if(this.state.rating === rating){
      this.setState({ rating: 0})
    } else {
      this.setState({rating:rating});
    }
    
}

  
 render() {
    return (
      <ul className="course--stars">
        {this.renderStars()}
      </ul>
    );
  }
}

export default StarRating;