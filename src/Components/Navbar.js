import React from "react";
import Logo from "../Assets/logo.png";
import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ scrollRef }) => {
  return (
    <div className="Navbar">
      <img className="logo" src={Logo} />

      <div className="navi">
        <a href="https://app.hirewithpiper.com">
          <h2>Log In</h2>
        </a>
        <button
          onClick={() => {
            scroll.scrollToBottom();
          }}
          className="basic hover"
        >
          Request a Demo
        </button>
      </div>
    </div>
  );
};

export default Navbar;
