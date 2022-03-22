import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/sideBar";
import Header from "./components/header";
// import MobileBar from "./components/MobileBar"
import Fallback from "../fallback";
import { appRoutes, purseRoutes } from "../../utils/routes";

const Purse = lazy(() => import("../../pages/purse/purse"));
const PurseChat = lazy(() => import("../../pages/purseChat/purseChat"));
const PurseActions = lazy(() => import("../../pages/purseActions/purseActions"));
const PurseSettings = lazy(() => import("../../pages/purseSettings/purseSettings"));

const PurseLayout = ({theme}) => {
  return (
    <section className={`bg-overlay-img bg-dark-1 h-screen flex justify-center`}>
      <div className={`container flex bg-dark-4`}>
        <SideBar />
        <div className="w-full">
          <Header theme={theme} />
          {/* <MobileBar theme={theme} /> */}
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path={purseRoutes.home} element={<Purse theme={theme} />} />
              <Route path={purseRoutes.chat} element={<PurseChat  theme={theme}/>} />
              <Route path={purseRoutes.actions} element={<PurseActions  theme={theme}/>} />
              <Route path={purseRoutes.settings} element={<PurseSettings  theme={theme}/>} />
              <Route path="*" element={<Navigate to={appRoutes.purses} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default PurseLayout;
