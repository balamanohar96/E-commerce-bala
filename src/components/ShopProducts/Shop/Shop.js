import React from 'react'
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
      return (
    <>
      <div>
      <div className="container-fluid container-top">
        <div className=" container-heading-1">
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
            <div className="d-inline-flex">
                <p className="m-0"><Link to="/">Home</Link></p>
                <p className="m-0 px-2">-</p>
                <p className="m-0">Shop</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Shop