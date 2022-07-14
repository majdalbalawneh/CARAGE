import React, { useState } from "react";
import Rating from "react-rating";
import axios from 'axios';
 
function Rate() {

  const [rating, setRating] = useState(0);

  const Click=(rate)=>{
    setRating(rate);
    axios.get('http://localhost/CARAGE/carage_backend/rating.php?rating='+rate)
  }

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <strong>Rate our service: </strong>
      <Rating
        fractions={2}
        emptySymbol="fa fa-star-o fa-2x star"
        fullSymbol="fa fa-star fa-2x star"
        initialRating={rating}
        onClick={rate=> Click(rate)}
        style={{color:'gold'}}
      />
      <p>Rating: {rating}</p>
 
    </div>
  );
}
 
export default Rate;
