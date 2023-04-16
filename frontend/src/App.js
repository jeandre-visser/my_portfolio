import React from "react";
import {
  About,
  Contact,
  Header,
  Projects,
  Skills,
  Education,
  Employment,
} from "./containers/index";
import { Navbar } from "./components";
import "./App.scss";
import Certifications from "./containers/Certifications/Certifications";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Employment />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
