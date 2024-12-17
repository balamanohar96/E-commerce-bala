import React from "react";

import "./StayUpdated.css";

const StayUpdated = () => {
  return (
    <>
      <div className="stay-container">
        <div className="heading-section">
          <h2 className="decorated">
            <span>Stay Updated</span>
          </h2>
          <div className="description-container">
            <h4>
              Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam
              labore at justo ipsum eirmod duo labore labore.
            </h4>
          </div>
        </div>
        <form className='search-container'>
          <input
            type="text"
            className="form-control input"
            placeholder="Email Goes Here"
          />
          <button type="button" className="i-button">Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default StayUpdated;
