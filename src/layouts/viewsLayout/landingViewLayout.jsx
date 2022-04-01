import React, { Suspense, lazy, Fragment, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../fallback";
import { absoluteRoutes } from "../../utils/routes";
import SideDrawer from "../../common/sideDrawer/sideDrawer";
import Header from '../../common/header/header'
import { landingNav } from "../../static/data";
const Landing = lazy(() => import("../../pages/landing/landing"));

const LandingViewLayout = () => {

  const [showSidebar, setShowSidebar] = useState(false)
  const [renderSideDrawer, setRenderSideDrawer] = useState(window.innerWidth < 1024)

  const toggleDrawer = () => {
    setShowSidebar((prevState) => !prevState)
  }
  const mql = window.matchMedia(`(max-width: 1023px)`);

  const mediaQueryChanged = () => {
    setRenderSideDrawer(mql.matches);
    // if not rendered, set show to false to so it will not open automatically next time we get on small screen
    if(!mql.matches)
      setShowSidebar(mql.matches);
    
  }

  useEffect(() => {
    mql.addEventListener("change", mediaQueryChanged)
  
    return () => {
      mql.removeEventListener("change", mediaQueryChanged);
    }
  }, [])
  
  return (
    <Fragment>
      <Header data={landingNav} toggleDrawer = {toggleDrawer} />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path= {absoluteRoutes.landing} element={<Landing />} />
        </Routes>
      </Suspense>
      {renderSideDrawer &&
      <SideDrawer 
        open = {showSidebar} 
        toggleDrawer = {toggleDrawer}
        navData = {landingNav}
      />}
    </Fragment>
  );
};

export default LandingViewLayout;
