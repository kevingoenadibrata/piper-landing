import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Info1 from "./Components/Info1";
import Info2 from "./Components/Info2";
import Info3 from "./Components/Info3";
import Info4 from "./Components/Info4";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Info1 />
      <Info2 />
      <Info3 />
      <Info4 />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
