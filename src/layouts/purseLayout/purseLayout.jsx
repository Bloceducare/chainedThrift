import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import Fallback from "../fallback";
import { appRoutes, purseRoutes } from "../../utils/routes";

const Purse = lazy(() => import("../../pages/purse/purse"));
const PurseChat = lazy(() => import("../../pages/purseChat/purseChat"));
const PurseActions = lazy(() => import("../../pages/purseActions/purseActions"));
const PurseSettings = lazy(() => import("../../pages/purseSettings/purseSettings"));

const PurseLayout = () => {

  const purseTabs = {
    OVERVIEW: "overview",
    ACTIONS: "actions",
    CHAT: "chat",
    SETTINGS: "settings",
  }

  const [activeTab, setActiveTab] = useState('Overview');
  return (
    <div className="bg-overlay-img-light dark:bg-overlay-img bg-cover h-screen lg:h-screenfit">
      <div className="container h-full mx-auto flex bg-dark-4">
        <SideBar />
        <div className="w-full h-full dark:bg-dark-1 bg-white-1 text-white-1 px-8">
          <Header />
          <Suspense fallback={<Fallback />}>
            <Routes>
              <Route path={purseRoutes.home} element={<Purse  activeTab={activeTab} setActiveTab={setActiveTab} />} />
              <Route path={purseRoutes.chat} element={<PurseChat activeTab={activeTab} setActiveTab={setActiveTab}/>} />
              <Route path={purseRoutes.actions} element={<PurseActions activeTab={activeTab} setActiveTab={setActiveTab} />} />
              <Route path={purseRoutes.settings} element={<PurseSettings activeTab={activeTab} setActiveTab={setActiveTab} />} />
              <Route path="*" element={<Navigate to={appRoutes.purses} />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PurseLayout;
