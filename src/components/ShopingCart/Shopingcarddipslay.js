//this section down by venkateswara rao
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_CART,
} from "../../redux/actions/Carditemaction";
import "./ShopingCard.css";
import { useNavigate, Link } from "react-router-dom";
import EmptyCart from "./EmtyCard";

// import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import { productDetailsReducer } from './../../redux/reducers/ProductRreducer';
//   DecreaseQuantity,
//   DeleteCart,
// } from "../../redux/actions/Carditemaction.js";

const Shopingcarddipslay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // getting the redux state value
  const items = useSelector((state) => state._cardProduct);
  console.log(items);
// total items in card count 
  let TotalCart = 0;
  items.Carts.forEach(function (item) {
    TotalCart += item.quantity * item.price;
  });
  //calacualting the total price of the card items
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }

  const procedtocheckout = () => {
    navigate("/checkout");
  };

  //deleted  or decrease  quantity
  const dcressQuantityhandler = (item, key) => {
    if (item.quantity === 1) {
      dispatch({
        type: DELETE_CART,
        payload: key,
      });
    } else {
      dispatch({
        type: DECREASE_QUANTITY,
        payload: key,
      });
    }
  };

  return (
    <React.Fragment>
      <div className="shop-detail-header-container">
        <h1 className="shop">SHOP DETAIL</h1>
        <div className="shop-detail-navigation">
          <Link to="/" className="links">
            Home
          </Link>
          <p className="pl-2 pr-2">-</p>
          <span> CheckOut</span>
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          {items.Carts.length === 0 ? (
            <div className="col-12 col-lg-8 table-container  empty-cart text-center mb-5">
              <div className="d-block">
                <EmptyCart />
              </div>
            </div>
          ) : (
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-bordered text-center mb-0">
                <thead className="bg-primary text-white">
                  <tr>
                    <th style={{ width: "35%" }}>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                  {items.Carts.map((item, key) => (
                    <tr key={key}>
                      <td className="d-flex titlewraping border">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="align-start"
                          style={{
                            height: "75px",
                            width: "75px",
                            objectFit: "cover",
                          }}
                        />
                        <p
                          style={{ width: "200px" }}
                          className="align-center pt-4 title-card-name d-inline-block"
                        >
                          {item.name}
                        </p>
                      </td>
                      <td className="align-middle">${item.price}</td>
                      <td className="align-middle">
                        <div
                          className="input-group quantity mx-auto"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button
                              onClick={() => dcressQuantityhandler(item, key)}
                              className="buttons-decrese-quantity"
                            >
                              {item.quantity === 1 ? (
                                <i className="fa fa-trash"></i>
                              ) : (
                                <i className="fa fa-minus"></i>
                              )}
                            </button>
                          </div>
                          <h1
                            type="text"
                            className="quantity-showing"
                            value={item.quantity}
                          >
                            {item.quantity}
                          </h1>
                          <div className="input-group-btn">
                            <button
                              onClick={() =>
                                dispatch({
                                  type: INCREASE_QUANTITY,
                                  payload: key,
                                })
                              }
                              className="buttons-increse-quantity"
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        ${TotalPrice(item.price, item.quantity)}
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() =>
                            dispatch({ type: DELETE_CART, payload: key })
                          }
                          className="card-deleted-button"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="col-lg-4">
            <div className="card border-info mb-5">
              <div className="card-header bg-info border-0">
                <h4 className="font-weight-bold text-white m-0">
                  Cart Summary
                </h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">Subtotal</h6>
                  <h6 className="font-weight-medium">
                    ${TotalCart.toFixed(2)}
                  </h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">Free</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">Total</h5>
                  <h5 className="font-weight-bold">${TotalCart.toFixed(2)}</h5>
                </div>

                <button
                  onClick={procedtocheckout}
                  className="btn-block checkout_button my-3 py-3"
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

// const mapStateToProps = (state) => {
//   //  console.log(state)
//   return {
//     items: state._cardProduct,
//   };
// };

export default Shopingcarddipslay;

//this method for mapstate props
// export default connect(mapStateToProps, {
//   IncreaseQuantity,
//   DecreaseQuantity,
//   DeleteCart,
// })(Shopingcarddipslay);
