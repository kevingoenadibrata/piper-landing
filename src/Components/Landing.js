import React from 'react';
import LandingIllus from '../Assets/diversity.png';
import Fade from 'react-reveal/Fade';

const Landing = () => {
  return (
    <div className="Landing">
      <Fade top distance="20px" duration={1500}>
        <h1 className="title underline">Hire smarter,</h1>
        <h1 className="title underline">faster, and easier</h1>
      </Fade>

      <Fade bottom distance="30px" duration={1500}>
      <p className="subtitle">Let us automate recruiting tasks so you can spend more time building an A team</p>
      </Fade>

      <Fade bottom distance="80px" duration={1000}>
      <button className="basic hover">Request a Demo</button>
      </Fade>

      <Fade bottom distance="100px" duration={1500}>
      <img src={LandingIllus} />
      </Fade>
    </div>
  );
}

export default Landing;
