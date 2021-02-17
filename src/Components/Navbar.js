import React from "react";
import Logo from "../Assets/logo.png";
import { animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="Navbar">
        <img className="logo" src={Logo} />

        <div className="navi">
          <a href="https://app.hirewithpiper.com">
            <h4>Log In</h4>
          </a>
          <button
            onClick={() => {
              scroll.scrollToBottom();
            }}
            className="button-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
