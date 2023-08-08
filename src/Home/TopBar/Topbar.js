import React from "react";
import "./TopBar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../../constants/NavBar/TabNavabarData";

const TopNavbar = () => {
  const items = useSelector((state) => state._cardProduct);
  // console.log(items);

  let ItemsCountIncart = 0;
  items.Carts.forEach(function (item) {
    ItemsCountIncart += item.quantity;
  });
  return (
    <div>
      <div className="container-fluid">
        <div
          className="row py-2 px-xl-5"
          style={{ backgroundColor: "#EDF1FF" }}
        >
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-start justify-content-start">
              <Link className="text-dark" to="/">
                FAQs
              </Link>
              <span className="text-muted px-2">|</span>
              <Link className="text-dark text-decoration-none" to="/">
                Help
              </Link>
              <span className="text-muted px-2">|</span>
              <Link className="text-dark text-decoration-none" to="/contactus">
                Support
              </Link>
            </div>
          </div>
          {/* Top-Navbar section */}

          <div className="col-lg-6 text-end text-lg-right">
            <div className="d-inline-flex align-items-end">
              {/*socail media button maping */}
              {SocialMediaLinks.map((each) => (
                <a
                  key={each.id}
                  className="text-dark px-2"
                  rel="noreferrer"
                  target="_blank"
                  href={each.link}
                >
                  {each.icon}
                </a>
              ))}
            </div>
          </div>
          {/* Icons imported from Fontawesome website & style used for icon size */}
        </div>

        <div className="row align-items-center py-3 px-xl-5">
          {/* row align-items-center is used for working in center alignment */}
          <div className="col-lg-3 d-none d-lg-block">
            <Link
              to="/"
              className="text-decoration-none"
              style={{ color: "black" }}
            >
              <h1 className="m-0 font-weight-semi-bold">
                <span className="text-primary font-weight-bold px-2 border mr-1">
                  E
                </span>
                {/* For E in box used border bootstrap className */}
                <span className="heading font-weight-bold">Shopper</span>
              </h1>
            </Link>
          </div>

          <div className="col-lg-6 col-6 text-left">
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                />
                {/* For search bar used bootstrap form-control className */}
                {/* placeholder is used showing lite text */}
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ height: "18px", width: "18px" }}
                      fill="#D19C97"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                    </svg>
                    {/* Search icon imported from Fontawesome */}
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div className="col-lg-3 col-6  text-right">
            <Link to="/" className="btn border m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ height: "18px", width: "18px" }}
                fill="#D19C97"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
              <span className="headingfornumber badge">0</span>
            </Link>
            <Link to="/cartcheck" className="btn border m-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ height: "18px", width: "18px" }}
                fill="#D19C97"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg>
              <span className="headingfornumber badge">{ItemsCountIncart}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
