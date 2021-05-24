import React from "react";
import Mockup2 from "../Assets/mockup2.png";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

const Info3 = () => {
  return (
    <div className="Info3">
      <Fade bottom distance="100px" duration={1500}>
        <img src={Mockup2} />
      </Fade>
      <div className="left">
        <Fade top distance="20px" duration={1500}>
          <div>
            <h2 className="title">Be Great at Hiring:</h2>
            <h2 className="title">Hiring Dashboard</h2>
            <h2 className="title">and Form Builder</h2>
            <p className="subtitle">
              Piper provide a simple, intuitive and effective tool for hiring
              team to manage every step of recruiting process. Source,
              interview, and hire the right candidates all in one platform
            </p>
          </div>
          <div>
            <button
              className="basic hover"
              onClick={() => {
                window.open("https://app.hirewithpiper.com/signup", "_self");
              }}
            >
              Get Started for Free
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Info3;
