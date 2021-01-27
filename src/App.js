import React, { useRef } from "react";
import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Info1 from "./Components/Info1";
import Info2 from "./Components/Info2";
import Info3 from "./Components/Info3";
import Info4 from "./Components/Info4";
import Form from "./Components/Form";
import "./App.css";

const App = () => {
  const scrollRef = useRef(null);
  return (
    <div className="App">
      <Navbar scrollRef={scrollRef} />
      <Landing />
      <Info1 />
      <Info2 />
      <Info3 />
      <Info4 />
      <Form scrollRef={scrollRef} />
    </div>
  );
};

export default App;
