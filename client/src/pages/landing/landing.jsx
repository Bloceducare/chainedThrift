import React from "react";
import { landingNav } from "../../static/data";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Features from "./components/Features";
import Actions from "./components/Actions";
import Jumbotron from "./components/Jumbotron";

const Landing = () => {
  return (
    <section>
      <div className="bg-overlay-img bg-dark-1 bg-unset bg-contain bg-no-repeat h-auto">
        <Header data={landingNav} />
        <Jumbotron />
        <Actions />
        <Features />
      </div>
      <Footer />
    </section>
  );
};

export default Landing;
