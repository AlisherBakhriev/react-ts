import React from "react";
import Statistik from "../image/statistik.png"
// import { Link, Element } from 'react-scroll';

const MediumComponents = () => {
  return (
    <section className="medium">
      <div className="medium-text">
        <h1>
          Why use direct mail? It <span>works</span> like crazy.
        </h1>
      </div>
      <div className="cont">
        <div className="medium-block">
            <div className="m-text">
                <h1>28X</h1>
                <p>Higher response rate than email & digital</p>
            </div>
            <div className="m-center">
                <img src={Statistik} alt="" />
                <p>Your messages get read</p>
            </div>
            <div className="m-text">
                <h1>17 Days</h1>
                <p>Lifespan of a postcard vs. <br/> seconds for email or SMS</p>
            </div>
        </div>
      </div>

      


    </section>

    
  );
};

export default MediumComponents;
