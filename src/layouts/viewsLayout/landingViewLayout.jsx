import React, { Suspense, lazy, Fragment, useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../fallback";
import { absoluteRoutes } from "../../utils/routes";
import SideDrawer from "../../common/sideDrawer/sideDrawer";
import Header from '../../common/header/header'
import { landingNav } from "../../static/data";
import Policy from "../../pages/policy/policy";

const Landing = lazy(() => import("../../pages/landing/landing"));
const NotFound = lazy(()=> import("../notFound"))
// const ContactUs = lazy(() => import("../../pages/contactUs/contactUs"))
const About = lazy(() => import("../../pages/about/about"))

const LandingViewLayout = () => {

  const [openSidebar, setOpenSidebar] = useState(false)
  const [renderSideDrawer, setRenderSideDrawer] = useState(window.innerWidth < 1024)

  const toggleDrawer = () => {
    setOpenSidebar((prevState) => !prevState)
  }
  const mql = window.matchMedia(`(max-width: 1023px)`);

  const mediaQueryChanged = useCallback(() => {
    setRenderSideDrawer(mql.matches);
    // if not rendered, set show to false so it will not open automatically next time we get on small screen
    if(!mql.matches)
      setOpenSidebar(mql.matches);
  },[mql]);

  useEffect(() => {
    mql.addEventListener("change", mediaQueryChanged)
  
    return () => {
      mql.removeEventListener("change", mediaQueryChanged);
    }
  }, [mediaQueryChanged, mql])
  
  return (
    <Fragment>
      <Header data={landingNav} toggleDrawer = {toggleDrawer} />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path= {absoluteRoutes.landing} element={<Landing />} />
          {/* <Route path={absoluteRoutes.contactUs} element={<ContactUs />} /> */}
          <Route path={absoluteRoutes.about} element={<About/>} />
          <Route path={absoluteRoutes.policy} element={<Policy/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {renderSideDrawer &&
      <SideDrawer 
        open = {openSidebar} 
        toggleDrawer = {toggleDrawer}
        navData = {landingNav}
      />}
    </Fragment>
  );
};

export default LandingViewLayout;
