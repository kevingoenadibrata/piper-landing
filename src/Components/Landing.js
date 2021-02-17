import React from "react";
import Mockup1 from "../Assets/Mockup1.png";
import Shape1 from "../Assets/shape.png";
import Fade from "react-reveal/Fade";
import { animateScroll as scroll } from "react-scroll";

const Landing = () => {
  return (
    <div className="Landing">
      <div className="left">
        <Fade top distance="20px" duration={1500}>
          <h1 className="title">Hire smarter,</h1>
          <h1 className="title">faster, and easier</h1>
          <p className="subtitle">
            Eliminate the repetitive recruiting tasks so you can spend more time
            building an A team
          </p>
          <div>
            <button
              className="basic hover"
              onClick={() => {
                scroll.scrollToBottom();
              }}
            >
              Get Started for Free
            </button>
          </div>
        </Fade>
      </div>
      <div className="right">
        <Fade bottom distance="100px" duration={1500}>
          <img src={Mockup1} className="mockup" />
        </Fade>
        <Fade bottom distance="150px" duration={1200}>
          <img src={Shape1} className="shape" />
        </Fade>
      </div>
    </div>
  );
};

export default Landing;
