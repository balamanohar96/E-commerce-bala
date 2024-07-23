//saishiva- navbar design ,venkateswara rao login section detials
import React from "react";
import CarsoulImages from "./CarsoulImages";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";
// import Login from "../../pages/Login/Login";
// import SignUp from "./../../pages/SignUp/SignUp";
import productsCategory from "../../constants/NavBar/CategoryData";

const Navbar = () => {
  const location = useLocation();
  // const [isLogined, setIslogined] = useState(false);
  // const [userName, setUserName] = useState("");
  // const [registerModal, setRegisterModal] = useState(false);
  // const [loginModal, setLoginmodal] = useState(false);
  // //check the cuurent location

  // //this for open login modal
  // const loginHandlermodal = (value) => {
  //   setLoginmodal(value);
  // };

  // //aftre login logout button
  // const logoutButtonShow = (value) => {
  //   setIslogined(value);
  // };

  // //user Details hanlder
  // const userDetailshandler = (details) => {
  //   const nameuser = details[0].lastName;

  //   setUserName(nameuser);
  // };

  // //register modal
  // const signupHandlermodal = (value) => {
  //   setRegisterModal(value);
  // };
  // //create account handler when click signup here
  // const createAccountHanlder = (value) => {
  //   setRegisterModal(value);
  // };

  // //login modal show after user register succesfully registered
  // const loginModalShowAfterRegister = (value) => {
  //   setLoginmodal(value);
  // };

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 cateegioressection  d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between  text-white w-100 toggledropdown"
              data-toggle="collapse"
              href="#navbar-vertical"
            >
              <h6 className="font-weight-bold m-4 text-dark">Categories</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="m-3"
                style={{ height: "20px", width: "20px" }}
              >
                <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light navoverplay"
              id="navbar-vertical"
            >
              <div
                className="navbar-nav w-100 overflow-hidden navslide"
                style={{ height: "410px" }}
              >
                <div className="nav-item dropdown">
                  <Link
                    to="/"
                    className="font-weight-bold nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    role="button"
                    id="navbarDropdown"
                  >
                    Dresses
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="m-3"
                      style={{ height: "10px", width: "40px" }}
                    >
                      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                    </svg>
                  </Link>
                  <div
                    className="dropdown-menu position-absolute bg-light border-0 rounded-0 w-100 m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    <Link to="/" className="dropdown-item">
                      Men's Dresses
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Women's Dresses
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Baby's Dresses
                    </Link>
                  </div>
                </div>
                {productsCategory.map((each) => (
                  <Link
                    key={each.id}
                    to={each.path}
                    className="font-weight-bold nav-item nav-link"
                  >
                    {each.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="text-primary font-weight-bold border px-3 mr-1">
                    E
                  </span>
                  <span className="heading">Shopper</span>
                </h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between d-lg-block"
                id="navbarCollapse"
                style={{ height: "65px" }}
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link
                    to="/"
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/shop/1"
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Shop Detail
                  </Link>
                  <div className="font-weight-bold nav-item dropdown">
                    <Link
                      href="/pages"
                      className="nav-link dropdown-toggle items"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>

                    <div className="dropdown-menu rounded-0 m-0">
                      <Link to="/cartcheck" className="dropdown-item items">
                        Shopping Cart
                      </Link>
                      <Link to="/checkout" className="dropdown-item items">
                        Checkout
                      </Link>
                    </div>
                  </div>
                  <Link
                    to="/contactus"
                    className="font-weight-bold nav-item nav-link items"
                  >
                    Contact
                  </Link>
                </div>
                {/* {isLogined ? (
                  <div className="navbar-nav cartCheck py-0">
                    <p className="font-weight-bold nav-item nav-link items">
                      {userName}
                    </p>
                    <p
                      onClick={() => setIslogined(false)}
                      className="loginButton font-weight-bold border-none nav-item nav-link items"
                    >
                      Logout
                    </p>
                  </div>
                ) : (
                  <div className="navbar-nav cartCheck py-0">
                    <p
                      onClick={() => setLoginmodal(true)}
                      className="loginButton font-weight-bold border-none nav-item nav-link items"
                    >
                      Login
                    </p>
                    <p
                      onClick={() => setRegisterModal(true)}
                      className="font-weight-bold nav-item nav-link items"
                    >
                      Register
                    </p>
                  </div>
                )} */}
              </div>
            </nav>

            {/* {loginModal && (
              <Login
                logOutShow={logoutButtonShow}
                modalClose={loginHandlermodal}
                userDetailsGet={userDetailshandler}
                createAccout={createAccountHanlder}
              />
            )}

            {registerModal && (
              <SignUp
                modalClose={signupHandlermodal}
                loginModalOpen={loginModalShowAfterRegister}
              />
            )} */}

            {location.pathname === "/" && <CarsoulImages />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
