import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingView from "./views/LandingView";
import AppView from "./views/AppView"
import NotFound from "./notFound";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route path="/app/*" element={<AppView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default Layout;
