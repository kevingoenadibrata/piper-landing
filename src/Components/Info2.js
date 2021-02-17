import React, {useState} from 'react';
import Info2Element from './Info2Element';
import { Waypoint } from 'react-waypoint';
import AnimatedNumber from "animated-number-react";

const Info2 = () => {
  const [elementInfo, setElementInfo] = useState([
    {value: 0, info: "Companies Worldwide"},
    {value: 0, info: "Integrated Features"},
    {value: 0, info: "Talents Hired"},
    {value: 0, info: "Applications Sourced"}
  ]);
  const INFO_CONST = [
    {value: 10, info: "Companies Worldwide"},
    {value: 15, info: "Integrated Features"},
    {value: 100, info: "Talents Hired"},
    {value: 500, info: "Applications Sourced"}
  ]

  return (
    <div className="Info2">
      <Waypoint
        onEnter={() => setElementInfo(INFO_CONST)}
        topOffset="70%"
        bottomOffset="200%"
      />
      <div className="Info2Container">
        {elementInfo.map((item) => <Info2Element info={item.info} value={item.value} />)}
      </div>
    </div>
  );
}

export default Info2;
