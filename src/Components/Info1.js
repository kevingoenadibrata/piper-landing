import React, { useState } from "react";
import Icon from "../Assets/blocks.svg";
import Fade from "react-reveal/Fade";
import Info1Element from "./Info1Element";
import { Waypoint } from "react-waypoint";
import {
  faIdCard,
  faClipboardList,
  faHammer,
  faCalendarAlt,
  faEnvelope,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

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
              Streamline your recruiting and grow your business from 1 to 100 to
              1,000 employees
            </p>

            <div className="Info1ElementsContainer">
              <Info1Element
                icon={faIdCard}
                title="Applicant Tracking System"
                description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery"
              />
              <Info1Element
                icon={faClipboardList}
                title="Company Job Board"
                description="Simply post job openings in careers page by embedding your job board on the company website - no coding needed."
              />
              <Info1Element
                icon={faHammer}
                title="Form Builder"
                description="Get up to speed in creating a hiring form to prescreen, register, and to collect any candidate information."
              />
              <Info1Element
                icon={faCalendarAlt}
                title="Interview Scheduler"
                description="Simplify your scheduling task with candidates without the back-and-forth messaging and emails."
              />
              <Info1Element
                icon={faEnvelope}
                title="Automated Mailer"
                description="Put repetitive hiring emails into templates and free up more time to close the best candidates."
              />
              <Info1Element
                icon={faCubes}
                title="Structured Hiring"
                description="Standardize hiring process so your hiring team can be more effective and make better hires."
              />
            </div>
          </div>
          <div className="greendeco">
            <h2>Discover Our Key Features</h2>
            <p>
              Streamline your recruiting and grow your business from 1 to 100 to
              1,000 employees
            </p>

            <div className="Info1ElementsContainer">
              <Info1Element
                icon={faIdCard}
                title="Applicant Tracking System"
                description="Improve candidate quality by building end-to-end pipeline coverage from source to hire to rediscovery"
              />
              <Info1Element
                icon={faClipboardList}
                title="Company Job Board"
                description="Simply post job openings in careers page by embedding your job board on the company website - no coding needed."
              />
              <Info1Element
                icon={faHammer}
                title="Form Builder"
                description="Get up to speed in creating a hiring form to prescreen, register, and to collect any candidate information."
              />
              <Info1Element
                icon={faCalendarAlt}
                title="Interview Scheduler"
                description="Simplify your scheduling task with candidates without the back-and-forth messaging and emails."
              />
              <Info1Element
                icon={faEnvelope}
                title="Automated Mailer"
                description="Put repetitive hiring emails into templates and free up more time to close the best candidates."
              />
              <Info1Element
                icon={faCubes}
                title="Structured Hiring"
                description="Standardize hiring process so your hiring team can be more effective and make better hires."
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Info1;
