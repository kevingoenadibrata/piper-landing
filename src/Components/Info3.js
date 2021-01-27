import React, {useState} from 'react';
import Gears from '../Assets/gears.svg';
import Blocks from '../Assets/blocks.svg';
import Database from '../Assets/database.svg';
import Fade from 'react-reveal/Fade';
import { Waypoint } from 'react-waypoint';

const Info3 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="Info3">
    <Waypoint onEnter={() => setVisible(true)} topOffset="10%" bottomOffset="40%"/>
      <Fade bottom cascade when={visible}>
        <div className="card-container">
          <h1>How Piper works</h1>
          <br />
          <div className="card">
            <h1>1. Design your recruitment process and requirements</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
          <div className="card">
            <h1>2. Publish the unique link to job searching platforms</h1>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
          <div className="card">
            <h1>3. Our system will automate all candidate and will notify you if review or interview is needed</h1>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Info3;
