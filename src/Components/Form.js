import React, { useState } from "react";
import Wireframe from "../Assets/wireframe.png";
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
      {/*<Fade bottom when={visible}>*/}
      <h1 className="title">We need your help</h1>
      <p className="subtitle">
        Help us build the perfect solution to recruitment. If you have done
        recruiting before and can relate to the problem we analyzed, we need
        your help. We want to have a quick interview with you. Please fill up
        the form below and we will contact you for the interview process.
      </p>
      <form name="demo" method="post">
        <input type="hidden" name="form-name" value="demo" />
        <input placeholder="Name" name="name" required />
        <input placeholder="Email" name="email" required />
        <button type="submit" className="basic submit">
          Submit
        </button>
      </form>
      {/* </Fade> */}
    </div>
  );
};

export default Form;
