import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import Fallback from "../fallback/";
import { routes, purseRoutes } from "../../utils/routes";

const Purse = lazy(() => import("../../pages/purse"));
const PurseChat = lazy(() => import("../../pages/purseChat"));
const PurseActions = lazy(() => import("../../pages/purseActions"));
const PurseSettings = lazy(() => import("../../pages/purseSettings"));

const PurseLayout = () => {
  return (
    <section className="bg-overlay-img bg-dark-1 h-screen flex justify-center">
      <div className="container flex bg-dark-4">
        <SideBar />
        <div className="w-full">
          <Header />
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path={purseRoutes.home} element={<Purse />} />
              <Route path={purseRoutes.chat} element={<PurseChat />} />
              <Route path={purseRoutes.actions} element={<PurseActions />} />
              <Route path={purseRoutes.settings} element={<PurseSettings />} />
              <Route path="*" element={<Navigate to={routes.purses} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default PurseLayout;
