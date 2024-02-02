// bala

import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import OfferCardData from "../../constants/Products/CardOfferdata";
function Cards() {
  return (
    <div className="offer-card-container pt-5">
      <div className="row rowww">
        {OfferCardData.map((each) => (
          <div  key={each.id} className="col-md-6 pb-4">
            <div
             
              className="offer-card-bg text-center text-md-right mb-2 p-5"
            >
              <img className="offer-card-img" src={each.imgUrl} alt={each.id} />
              <div className="z-index">
                <h5 className="offer-card-offer mb-3">{each.offer}</h5>
                <h1 className="offer-card-heading">{each.name}</h1>
                <Link to="/shop" className="offer-card-button">
                  {each.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
