import React from "react";
import Features from "./Features/Features";
import Product from "./Products/Products";
import AllSections from "./AllSections/AllSections";
import Cards from "./CardOfferSection/Cards";
import Vendor from "./vendorSection/Vendor";

import StayUpdated from "./StayUpdated/StayUpdated";

const Home = () => {
  return (
    <div>
      <Features />
      <AllSections />
      <Cards />
      <StayUpdated />
      <Product />

      <Vendor />
    </div>
  );
};

export default Home;
