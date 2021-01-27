import React, {useState} from 'react';
import Gears from '../Assets/gears.svg';
import Toolbox from '../Assets/toolbox.svg';
import Database from '../Assets/database.svg';
import Fade from 'react-reveal/Fade';
import { Waypoint } from 'react-waypoint';

const Info2 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Info2">
    <Waypoint onEnter={() => setVisible(true)} topOffset="10%" bottomOffset="40%"/>


      <Fade bottom cascade when={visible}>
        <div className="card-container">
          <div className="card">
            <img src={Gears} className="icon" />
            <h1>Automated Process</h1>
            <p>You don’t need to worry about sending the right email and scheduling an interview for your candidate. Our automation platform will do it for you</p>
          </div>
          <div className="card">
            <img src={Database} className="icon" />
            <h1>Centralized Database</h1>
            <p>You can see all the recruitment data in your company in a single database. Search, filter, and collect data using our database tool has never been easier</p>
          </div>
          <div className="card">
            <img src={Toolbox} className="icon" />
            <h1>All-in-One Toolbox</h1>
            <p>Need a form? we got you. Need a scheduler? we have one. Need to collect files? easy. Get all you need for your recruiting process in one place</p>
          </div>
        </div>
      </Fade>
      <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#56d391" fill-opacity="1" d="M0,96L40,122.7C80,149,160,203,240,218.7C320,235,400,213,480,197.3C560,181,640,171,720,181.3C800,192,880,224,960,213.3C1040,203,1120,149,1200,133.3C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
        <div className="container">
        </div>
      </div>
    </div>
  );
}

export default Info2;
