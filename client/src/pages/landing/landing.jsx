import React from "react";
import { landingNav } from "../../static/data";
import Footer from "../../common/footer/footer";
import Header from "../../common/header/header";
import Features from "./components/Features";
import Actions from "./components/Actions";
import Jumbotron from "./components/Jumbotron";
import useTheme from "../../hooks/useTheme"

const Landing = () => {
  const {theme, changeTheme} = useTheme();
  return (
    <section>
      <div className={` ${theme === 'dark'? 'bg-overlay-img' : 'bg-overlay-img-1'} ${theme === 'dark' ?  `bg-dark-1` : `bg-light-1` }  bg-unset bg-contain bg-no-repeat h-auto`}>
        <Header data={landingNav} theme={theme} changeTheme={changeTheme} />
        <Jumbotron theme={theme} />
        <Actions theme={theme} />
        <Features theme={theme} />
      </div>
      <Footer />
    </section>
  );
};

export default Landing;
