import React from "react";
// import { landingNav } from "../../static/data";
import Footer from "../../common/footer/footer";
// import Header from "../../common/header/header";
import Features from "./components/Features";
import Actions from "./components/Actions";
import Jumbotron from "./components/jumbotron";

const Landing = () => {
  return (
      <div className="dark:bg-overlay-img bg-overlay-img-light dark:bg-dark-1 bg-light-1 bg-unset bg-contain bg-no-repeat h-auto">
        <Jumbotron  />
        <Actions />
        <Features />
        <Footer />
      </div>
  );
};

export default Landing;
