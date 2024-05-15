import React from "react";

import "./AllSections.css";

import TrendySection from "../TrendySection/TrendySection";
import StayUpdated from "../StayUpdated/StayUpdated";

import TrendyProductsData from "../../constants/Products/TrendyProductsData";
const AllSections = () => {
  return (
    <>
      <div className="pt-5">
        <h2 className="decorated">
          <span>Trendy Products bala</span>
        </h2>
      </div>
      <div className="container-fluid trendy-shop-container">
        <div className="row">
          {TrendyProductsData.map((each) => {
            return (
              <div
                key={each.id}
                className="col-lg-4 col-xl-3 col-md-6 col-sm-12"
              >
                <TrendySection key={each.id} shopDetails={each} />
              </div>
            );
          })}
        </div>
      </div>
      <StayUpdated />
      <div className="pt-5">
        <h2 className="decorated">
          <span>Just Arrived</span>
        </h2>
      </div>
      <div className="container-fluid trendy-shop-container">
        <div className="row">
          {TrendyProductsData.map((each) => {
            return (
              <div
                key={each.id}
                className="col-lg-4 col-xl-3 col-md-6 col-sm-12"
              >
                <TrendySection key={each.id} shopDetails={each} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllSections;
