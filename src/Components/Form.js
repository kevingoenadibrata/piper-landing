import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { Waypoint } from "react-waypoint";

const Form = ({ scrollRef }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="Form" ref={scrollRef}>
      <Waypoint
        onEnter={() => setVisible(true)}
        topOffset="30%"
        bottomOffset="30%"
      />
      <h2 className="title">
        Design a tailored hiring pipeline that helps your organization win at
        scale
      </h2>
      <p2 className="subtitle">
        To empower your company to rapid scale, we offer the easy-to-use and
        customizable tools to manage all the hiring hassle
      </p2>
      <form name="demo" method="post">
        <input type="hidden" name="form-name" value="demo" />
        <input placeholder="Name" name="name" required />
        <input placeholder="Email" name="email" type="email" required />
        <div>
          <button type="submit" className="basic hover">
            Get Started for Free
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
