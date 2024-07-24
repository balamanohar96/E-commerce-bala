// //dinesh,dhanaraju,venkateswara rao

import React, { useState } from "react";
import "./ProductComponent.css";
import { SpinnerCircularFixed } from "spinners-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AllProductsBtn from "../../ShopDetail/AllProducts/AllProductsBtn";

const ProductComponents = () => {
  const { products, loading } = useSelector((state) => state.Products);
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState(null);
  //states for price ranges slecting
  const [filterByPrice, setFilterByPrice] = useState({
    all: true,
    between0and200: false,
    between201and400: false,
    between401and600: false,
    between601and800: false,
    between801and1000: false,
  });

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFilterByPrice((previousState) => {
      if (name === "all") {
        return {
          all: true,
          between0and200: false,
          between201and400: false,
          between401and600: false,
          between601and800: false,
          between801and1000: false,
        };
      } else {
        return {
          ...previousState,
          all: false,
          [name]: checked,
        };
      }
    });
  };
  // filtering the products based on price ranges
  const filteredProducts = products.filter((product) => {
    if (filterByPrice.all) {
      return true;
    } else if (
      filterByPrice.between0and200 &&
      product.price >= 0 &&
      product.price <= 200
    ) {
      return true;
    } else if (
      filterByPrice.between201and400 &&
      product.price >= 201 &&
      product.price <= 400
    ) {
      return true;
    } else if (
      filterByPrice.between401and600 &&
      product.price >= 401 &&
      product.price <= 600
    ) {
      return true;
    } else if (
      filterByPrice.between601and800 &&
      product.price >= 601 &&
      product.price <= 800
    ) {
      return true;
    } else if (
      filterByPrice.between801and1000 &&
      product.price >= 801 &&
      product.price <= 1000
    ) {
      return true;
    }
    return false;
  });
  // sorting  the products based on alphabticorder and price ranges and ratings
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "az") return a.title.localeCompare(b.title);
    else if (sort === "za") return b.title.localeCompare(a.title);
    else if (sort === "priceLow") return a.price - b.price;
    else if (sort === "priceHigh") return b.price - a.price;
    else if (sort === "ratingLow") return a.rating?.rate - b.rating?.rate;
    else if (sort === "ratingHigh") return b.rating?.rate - a.rating?.rate;
    return null;
  });
  //filitered data after seraching
  const SerachResults = sortedProducts.filter((each) =>
    each.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4 filter-heading">
                Filter by price
              </h5>
              <form>
                <div className=" mb-2">
                  <input
                    type="checkbox"
                    name="all"
                    id="price-all"
                    checked={filterByPrice.all}
                    onChange={handleCheckbox}
                  />
                  <label className="pl-2" htmlFor="price-all">
                    All Price
                  </label>
                </div>
                <div className=" mb-2">
                  <input
                    type="checkbox"
                    id="price-1"
                    name="between0and200"
                    checked={filterByPrice.between0and200}
                    onChange={handleCheckbox}
                  />
                  <label className="pl-2" htmlFor="price-1">
                    $0 - $200
                  </label>
                </div>
                <div className=" mb-2">
                  <input
                    type="checkbox"
                    id="price-2"
                    name="between201and400"
                    checked={filterByPrice.between201and400}
                    onChange={handleCheckbox}
                  />
                  <label className="pl-2" htmlFor="price-2">
                    $201 - $400
                  </label>
                </div>
                <div className=" mb-2">
                  <input
                    type="checkbox"
                    id="price-3"
                    name="between401and600"
                    checked={filterByPrice.between401and600}
                    onChange={handleCheckbox}
                  />
                  <label className="pl-2" htmlFor="price-3">
                    $401 - $600
                  </label>
                </div>

                <div className="mb-2">
                  <input
                    type="checkbox"
                    id="price-4"
                    name="between601and800"
                    checked={filterByPrice.between601and800}
                    onChange={handleCheckbox}
                  />
                  <label className="pl-2" htmlFor="price-4">
                    $601 - $800
                  </label>
                </div>

                <div>
                  <input
                    type="checkbox"
                    id="price-5"
                    name="between801and1000"
                    checked={filterByPrice.between801and1000}
                    onChange={handleCheckbox}
                  />
                  <label className="pl-2" htmlFor="price-5">
                    $801 - $1000
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        onChange={searchInputHandler}
                        value={searchInput}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent span-color">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4" style={{ display: "flex" }}>
                    <h5 style={{ marginRight: "10px" }}>Sort by :</h5>
                    <select onChange={(e) => setSort(e.target.value)}>
                      <option>select</option>
                      <option value="az">A - Z</option>
                      <option value="za">Z - A</option>
                      <option value="ratingLow">Rating Low</option>
                      <option value="ratingHigh">Rating High</option>
                      <option value="priceLow">Price Low to High</option>
                      <option value="priceHigh">Price High to Low</option>
                    </select>
                  </div>
                </div>
              </div>
              {!loading ? (
                SerachResults.map((each, index) => {
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 pb-1"
                      key={index}
                    >
                      <div className="card border-0 mb-4">
                        <div className="card-header border product-container">
                          <img
                            src={each.image}
                            alt=""
                            className="product-img img-styling "
                          />
                        </div>
                        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                          <h6 className="text-truncate m-3 mb-3">
                            {each.title}
                          </h6>
                          <div className="d-flex justify-content-center">
                            <h6>${each.price}</h6>
                            <h6 className="text-muted ml-2">
                              <del>${each.price}</del>
                            </h6>
                          </div>
                        </div>
                        <div className="card-footer d-flex justify-content-between bg-light border">
                          <Link to={`/shop/${each.id}`}>
                            <button className="btn btn-sm text-dark p-0">
                              <i className="fas fa-eye mr-1 fas-color"></i>
                              View Detail
                            </button>
                          </Link>
                          <AllProductsBtn item={each} />
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SpinnerCircularFixed size={100} color={"Red"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductComponents;
