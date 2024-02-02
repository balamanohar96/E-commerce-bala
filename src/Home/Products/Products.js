import React from "react";
import "./Products.css";
import productData from "../../constants/Products/ProductData";

const Product = () => {
  return (
    <center>
      <div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            {productData.map((each) => (
              <div key={each.id} className="col-lg-4 col-md-6 col-sm-12 pb-1 ">
                <div className="d-flex flex-column border mb-4 pb-2">
                  <div className="products-container">
                    <p className="product-heading">{each.products} products</p>
                    <div className="inner">
                      <img alt="" src={each.imageLink} className="size " />
                    </div>
                    <h3 className="product-name">{each.productName}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </center>
  );
};

export default Product;
