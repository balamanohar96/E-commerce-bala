import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/actions/ShopAction";
import "./AllProducts.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "react-bootstrap/Card";
import { ADD_CART } from "../../../redux/actions/Carditemaction";

import { Link } from "react-router-dom";

const options = {
  margin: 30,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },

    594: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const AllProducts = () => {
  const { products } = useSelector((state) => ({ ...state.Products }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const first_button = "View Detail";
  const second_button = "Add To Cart";

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <OwlCarousel {...options}>
          {products.map((eachProduct, key) => {
            return (
              <div key={key} className="col-sm-12 col-md-6 col-lg-3">
                <Card
                  style={{
                    width: "20rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "18px",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={eachProduct.image}
                    className="all-products-shop-image p-3"
                  />

                  <hr className="line" />

                  <div style={{ height: "6rem" }}>
                    <div className="pt-3 pl-3 pr-3">
                      <Card.Title className="all-products-shop-title">
                        {eachProduct.title}
                      </Card.Title>
                      <div className="d-flex justify-content-center">
                        <Card.Text className="price mr-3">
                          ${eachProduct.price}
                        </Card.Text>
                        <Card.Text className="cross-price">
                          ${eachProduct.price}
                        </Card.Text>
                      </div>
                    </div>
                  </div>

                  <hr className="line" />

                  <div className="card-bottom-container p-3">
                    <div>
                    <Link to={`/shop/${eachProduct.id}`}>
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="#D19c97"
                      >
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z" />
                      </svg>
                      
                        <button className="button">{first_button}</button>
                      </Link>
                    </div>
                    <div>
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        fill="#D19c97"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                      <button
                        onClick={() =>
                          dispatch({ type: ADD_CART, payload: {...eachProduct,quantity:1} })
                        }
                        className="button"
                      >
                        {second_button}
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default AllProducts;
