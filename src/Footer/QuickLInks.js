import React from "react";
import { Link } from "react-router-dom";
const QuickLInksData = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/shop",
    title: "Our Shop",
  },
  {
    id: 3,
    to: "/shop/1",
    title: "Shop Detail",
  },
  {
    id: 4,
    to: "/cartcheck",
    title: "Shopping Cart",
  },
  {
    id: 5,
    to: "/checkout",
    title: "Checkout",
  },
  {
    id: 6,
    to: "/contactus",
    title: "Contact Us",
  },
];

const QuickLInks = () => {
  return (
    <div className="col-md-4 d-flex flex-column mb-4">
      <h3 className="quick-heading mb-4">Quick Links</h3>
      {QuickLInksData.map((each) => (
        <Link key={each.id} className="footer-link mb-2" to={each.to}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="right-arrow"
            viewBox="0 0 320 512"
          >
            <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
          </svg>
          {each.title}
        </Link>
      ))}
    </div>
  );
};

export default QuickLInks;
