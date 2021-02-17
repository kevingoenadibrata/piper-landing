import React, { useState } from "react";
import AnimatedNumber from "animated-number-react";
const Info2Element = ({value, info}) => {
  return (
    <div className="Info2Element">
        <h2>
        <AnimatedNumber value={value} formatValue={(v)=>Math.floor(v)}/>+
        </h2>
        <p2>{info}</p2>
    </div>
  );
};

export default Info2Element;
