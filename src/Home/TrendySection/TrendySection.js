import React, { useState } from "react";
import "./TrendySection.css";
import { useDispatch } from "react-redux";
import { AddCart } from "../../redux/actions/Carditemaction";
import { Link } from "react-router-dom";

const TrendySection = (props) => {
  const dispatch = useDispatch();
  const [itemadded, setItemAdded] = useState(false);
  const { shopDetails } = props;
  const { image, title, price, cross_price } = shopDetails;

  const addTocardhandler = () => {
    setItemAdded(true);
    dispatch(AddCart({ ...shopDetails, quantity: 1 }));
    setTimeout(() => setItemAdded(false), 1000);
  };

  return (
    <div className="border mb-4">
      <div className="border-0">
        <div className="image-container overflow-hidden">
          <img className="product-image" src={image} alt="" />
        </div>
        <hr className="line" />
        <div className="title-container text-center ">
          <h6 className="product-title">{title}</h6>
          <div className="price-container">
            <h4 className="price">${price}.00</h4>
            <h4 className="cross-price">${cross_price}.00</h4>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="d-flex justify-content-between">
        <div className="bottom-button-container">
          <Link to="/" className="cart-button">
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#D19c97"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
            </svg>
            "View Detail"
          </Link>
        </div>
        <div className="bottom-button-container">
          <button
            onClick={addTocardhandler}
            className={itemadded ? "AddedCard_button" : "Addcart-button"}
          >
            <svg
              className="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#D19c97"
            >
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>{" "}
            &nbsp;&nbsp;
            {itemadded ? "Added to cart" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendySection;
