import React, { useState } from "react";

const Info1Element = ({title, description, icon}) => {
  return (
    <div className="Info1Element">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
        <p2>{description}</p2>
    </div>
  );
};

export default Info1Element;
