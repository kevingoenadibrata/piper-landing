import React, { useState } from "react";
import Icon from "../Assets/blocks.svg";
import Fade from "react-reveal/Fade";
import Info1Element from "./Info1Element";
import { Waypoint } from "react-waypoint";
import { animateScroll as scroll } from "react-scroll";

const Info1 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Info1">
      <Waypoint
        onEnter={() => setVisible(true)}
        topOffset="50%"
        bottomOffset="200%"
      />

      <Fade bottom when={visible}>
        <div className="bigContainer">
          <div className="container">
            <h2>Discover Our Key Features</h2>
            <p>
              Streamline your recruiting and grow your business from 1 to 100 to 1,000 employees
            </p>

            <div className="Info1ElementsContainer">
              <Info1Element icon={Icon} title="Applicant Tracking System" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Company Job Board" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Form Builder" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Interview Scheduler" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Automated Mailer" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Structured Hiring" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />

            </div>
          </div>
          <div className="greendeco">
            <h2>Discover Our Key Features</h2>
            <p>
              Streamline your recruiting and grow your business from 1 to 100 to 1,000 employees
            </p>

            <div className="Info1ElementsContainer">
              <Info1Element icon={Icon} title="Applicant Tracking System" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Company Job Board" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Form Builder" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Interview Scheduler" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Automated Mailer" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />
              <Info1Element icon={Icon} title="Structured Hiring" description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery" />

            </div>
          </div>
        </div> 
      </Fade>
    </div>
  );
};

export default Info1;
