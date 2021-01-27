import React, { useState } from "react";
import Wireframe from "../Assets/wireframe.png";
import Fade from "react-reveal/Fade";
import { Waypoint } from "react-waypoint";

const Info4 = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Info4">
      <Waypoint
        onEnter={() => setVisible(true)}
        topOffset="30%"
        bottomOffset="30%"
      />

      <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#56d391"
            fill-opacity="1"
            d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,165.3C672,160,768,192,864,186.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="big-container">
        <img src={Wireframe} />
        <Fade right when={visible}>
          <div className="container">
            <h1 className="title">Our Vision</h1>
            <p className="subtitle">
              The world of recruiting is a competitive field. While you’re busy
              working on spreadsheets, forms, and making sure things are in the
              right place, your competitors are building relationships with
              great candidates. We believe that you shouldn’t be worrying about
              these things and let our technology do the work. Piper is not a
              replacement for your HR. We are here to be your HR’s sidekick. We
              do what your HR are busy with, and your HR do what we cant,
              employee relations
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Info4;
