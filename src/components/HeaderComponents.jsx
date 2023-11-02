import React from "react";
import "../index.css";

import Logo from "../image/logo.svg";

const HeaderComponents = () => {
  return (
      <header>
        <div className="cont">
          <div className="nav-left">
            <div className="nav-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="nav-right">
            <ul>
             <a href="#"><li>Resources</li></a> 
              <a href="#"><li>Success stories</li></a>
              <a href="#"><li>Company</li></a>
              <a href="#"><li>Pricing</li></a>
            </ul>
            <button className="btn-login">Login</button>
            <button className="btn-freeAccount">Create free account</button>
          </div>
        </div>
      </header>
  );
};

export default HeaderComponents;
