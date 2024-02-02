import React from "react";

import "./Features.css";

import FeaturesData from "../../constants/Products/FeaturesData";
const Features = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {FeaturesData.map((feature) => (
            <div key={feature.id} className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="d-flex align-items-center border mb-4">
                <div className="feature-container">
                  {feature.icon}

                  <h2 style={{ fontSize: "23px" }}>{feature.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
