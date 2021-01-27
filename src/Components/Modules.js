import React, {useState} from 'react';
import Arch from '../Assets/architect.png';
import Fade from 'react-reveal/Fade';
import { Waypoint } from 'react-waypoint';

const Info3 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Info3">
      <Waypoint onEnter={() => setVisible(true)} topOffset="30%" bottomOffset="30%"/>

        <div className="card-container">
            <h1>The Building Blocks</h1>
            <Fade cascade bottom when={visible}>
            <div className="module-container">
              <div className="module">
                <div className="icon"></div>
                <div className="text-container">
                  <h1>PiperForms</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
              <div className="module">
                <div className="icon"></div>
                <div className="text-container">
                  <h1>PiperEmails</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
              <div className="module">
                <div className="icon"></div>
                <div className="text-container">
                  <h1>PiperDatabase</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
              <div className="module">
                <div className="icon"></div>
                <div className="text-container">
                  <h1>PiperSchedule</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
              <div className="module">
                <div className="icon"></div>
                <div className="text-container">
                  <h1>PiperFiles</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
              <div className="module">
                <div className="icon"></div>
                <div className="text-container">
                  <h1>PiperReview</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
              </div>
          </div>
        </Fade>
      </div>
      <img src={Arch} />
    </div>
  );
}

export default Info3;
