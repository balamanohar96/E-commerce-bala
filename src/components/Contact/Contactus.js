import React from "react";
import Top from "./Top/Top";
import First from "./First/First";
import Second from './Second/Second'
import './Contactus.css'

const Contactus = () => {
  return (
    <div>
      <Top />
      <div className="contactusSection">
        <First />
        <Second />
      </div>
    </div>
  );
};

export default Contactus;
