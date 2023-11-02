import React from "react";
import "./index.css";
import HeaderComponents from "./components/HeaderComponents";
import MainComponents from "./components/MainComponents";
import BrandComponents from "./components/BrandComponents";
import MediumComponents from "./components/MediumComponents";
import Timeline from "./components/TimelineComponents";

const App = () => {
  return (
    <div>
      <HeaderComponents />
      <MainComponents />
      <BrandComponents />
      <MediumComponents /> 
      <Timeline />
    </div>
  );
};

export default App;
