import React from "react";
import Img1 from "../image/img-1.webp";
import Img2 from "../image/img-2.webp";

const MainComponents = () => {
  return (
    <section className="main">
      <div className="cont">
        <div className="main-block">
          <div className="main-blok-left">
            <div className="main-text">
              <h1>
                Meet your <br /> <span>favorite</span> new (old) marketing channel.
              </h1>
              <p>
                Remarkable results. Easier than email. Postcard marketing
                reinvented for modern ecommerce.
              </p>
            </div>
            <div className="main-btn">
              <button>Try it Risk-free</button>
            </div>
          </div>
          <div className="main-block-right">
              <img className="img-1" src={Img1} alt="" />
              <img className="img-2" src={Img2} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponents;
