import React from "react";

import imgBrand1 from "../image/brandImg-1.jpg";
import imgBrand2 from "../image/brandImg-2.jpg";
import imgBrand3 from "../image/brandImg-3.jpg";
import imgBrand4 from "../image/brandImg-4.webp";
import imgBrand5 from "../image/brandImg-5.webp";
import imgBrand6 from "../image/brandImg-6.webp";
import imgBrand7 from "../image/brandImg-7.webp";
import imgBrand8 from "../image/brandImg-8.gif";
import imgBrand9 from "../image/brandImg-9.jpg";

import imgBrand11 from "../image/brandImg-1.1.jpg";
import imgBrand21 from "../image/brandImg-2.2.png";
import imgBrand31 from "../image/brandImg-3.3.png";
import imgBrand41 from "../image/brandImg-4.4.png";
import imgBrand51 from "../image/brandImg-5.5.png";
import imgBrand61 from "../image/brandImg-6.6.png";
import imgBrand71 from "../image/brandImg-7.7.png";
import imgBrand81 from "../image/brandImg-8.8.jpg";
import imgBrand91 from "../image/brandImg-9.9.jpg";

const BrandComponents = () => {
  return (
      <section className="brand">
        <div className="brand-text">
          <h1>Trusted by thousands of top DTC  <span>brands.</span> </h1>
        </div>
        <marquee >
            <div className="brand-cont">
          <div className="brand-item">
            <img className="brand-img" src={imgBrand1} alt="" />
            <img className="brand-logo" src={imgBrand11} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand2} alt="" />
            <img className="brand-logo" src={imgBrand21} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand3} alt="" />
            <img className="brand-logo" src={imgBrand31} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand4} alt="" />
            <img className="brand-logo" src={imgBrand41} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand5} alt="" />
            <img className="brand-logo" src={imgBrand51} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand6} alt="" />
            <img className="brand-logo" src={imgBrand61} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand7} alt="" />
            <img className="brand-logo" src={imgBrand71} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand8} alt="" />
            <img className="brand-logo" src={imgBrand81} alt="" />
          </div>
          <div className="brand-item">
            <img className="brand-img" src={imgBrand9} alt="" />
            <img className="brand-logo" src={imgBrand91} alt="" />
          </div>

            </div>
        </marquee>
      </section>
  );
};

export default BrandComponents;
