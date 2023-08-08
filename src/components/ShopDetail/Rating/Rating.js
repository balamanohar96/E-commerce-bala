import React from "react";
import "./Rating.css";

import {FaStar,FaStarHalfAlt} from 'react-icons/fa'

import { AiOutlineStar} from 'react-icons/ai'



const Rating = ({ rating, reviews }) => {
  const productRating = Array.from({ length: 5 }, (elem, index) => {
  //  i = 0, 1,2, 3, 4
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="rating-icon" />
        ) :rating >= index + 0.5 ? (
          <FaStarHalfAlt className="rating-icon" />
        ) : (
          <AiOutlineStar className="rating-icon" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="stars">
        {productRating}
        <p>({reviews} Reviews)</p>
      </div>
    </>
  );
};

export default Rating