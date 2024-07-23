import React from "react";
import Features from "./Features/Features";
import Product from "./Products/Products";
import AllSections from "./AllSections/AllSections";
import Cards from "./CardOfferSection/Cards";
import Vendor from "./vendorSection/Vendor";

const Home = () => {
  return (
    <div>
      <Features />
      <Product />
      <Cards />
      <AllSections />
      <Vendor />
    </div>
  );
};

export default Home;
