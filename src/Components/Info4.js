import React from "react";
import Shapes from "../Assets/shapes.jpg";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

const Info3 = () => {
  return (
    <div className="Landing">
      
      <div className="left">
        <Fade top distance="20px" duration={1500}>
          <h2 className="title">Why We Build Piper</h2>
          <p2 className="subtitle">
            The world of recruiting is a competitive field. While you’re busy working on spreadsheets, forms, and making sure things are in the right place, your competitors are building relationships with great candidates. We believe that you shouldn’t be worrying about these things and let our technology do the work. Piper is not a replacement for your HR. We are here to be your HR’s sidekick. We do what your HR are busy with, and your HR do what we cant, building relationships.
          </p2>
        </Fade>
      </div>

      <Fade bottom distance="100px" duration={1500}>
        <img src={Shapes} />
      </Fade>

      
    </div>
  );
};

export default Info3;
