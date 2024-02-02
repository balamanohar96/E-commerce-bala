import React from "react";
import SingleProduct from "./components/ShopDetail/SingleProduct/SingleProduct";
import Home from "./Home/Home";
import Shopingcarddipslay from "./components/ShopingCart/Shopingcarddipslay";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductComponent from "./components/ShopProducts/ProductComponent/ProductComponent";
import Checkout from "./components/CheckOut/Checkout";
import TopNavbar from "./Home/TopBar/Topbar";
import Contactus from "./components/Contact/Contactus";
import Footer from "./Footer/Footer";
import Navbar from "./Home/Navbar/Navbar";
import BackToTopButton from "./components/BackToTop/BackToTopButton";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/shop" element={<ProductComponent />} />
          <Route
            exact
            path="/shop/:id"
            element={<SingleProduct />}
          />
          <Route exact path="/cartCheck" element={<Shopingcarddipslay />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
        <Footer />
        <BackToTopButton />
      </BrowserRouter>
    </>
  );
};

export default App;

