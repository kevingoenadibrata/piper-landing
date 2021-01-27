import React, { useState } from 'react';
import Illus from '../Assets/pipeline.png';
import Fade from 'react-reveal/Fade';
import { Waypoint } from 'react-waypoint';

const Info1 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Info1">
      <Waypoint onEnter={() => setVisible(true)} topOffset="30%" bottomOffset="30%"/>

      <Fade left when={visible}>
        <div className="container">
          <h1 className="title">You should be doing something else</h1>
          <p className="subtitle">
            If you’re in charge of recruiting someone for your company, organization, or anything, this is for you. We realize that Founders, HR managers, and recruiters have much more important things to do than creating all the little details for recruitment. Piper is here to do the hard work for you so you can focus on building relationships with people
          </p>
          <button className="minimal">Request a Demo</button>
        </div>
      </Fade>


      <img src={Illus} />

    </div>
  );
}

export default Info1;
