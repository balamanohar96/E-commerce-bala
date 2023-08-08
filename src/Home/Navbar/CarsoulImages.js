import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const CarsoulImages = () => {
  return (
    <div
    id="carouselExampleControls"
    className="carousel slide"
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://technext.github.io/eshopper/img/carousel-1.jpg"
          className="carsoulimage"
          alt="..."
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3">
            <h4 className="text-light text-uppercase font-weight-medium mb-3">
              10% Off Your First Order
            </h4>
            <h3 className="display-4 text-white font-weight-bold mb-4">
              Reasonable Price
            </h3>
            <Link to="/shop" className="btn btn-light py-2 px-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <img
          src="https://technext.github.io/eshopper/img/carousel-2.jpg"
          className="carsoulimage"
          alt="..."
        />
        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3">
            <h4 className="text-light text-uppercase font-weight-medium mb-3">
              10% Off Your First Order
            </h4>
            <h3 className="display-4 text-white font-weight-bold mb-4">
              Fashionable Dress
            </h3>
            <Link to="/shop" className="btn btn-light py-2 px-3">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span
        className="carousel-control-prev-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span
        className="carousel-control-next-icon"
        aria-hidden="true"
      ></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default CarsoulImages
