import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Info1Element = ({ title, description, icon }) => {
  return (
    <div className="Info1Element">
      <FontAwesomeIcon icon={icon} size="2x" className="icon" />
      <h3>{title}</h3>
      <p2>{description}</p2>
    </div>
  );
};

export default Info1Element;
