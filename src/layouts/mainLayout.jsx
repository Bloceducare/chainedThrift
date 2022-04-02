import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingViewLayout from "./viewsLayout/landingViewLayout";
import AppViewLayout from "./viewsLayout/appViewLayout"
import NotFound from "./notFound";

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/*" element={<LandingViewLayout />} />
      <Route path="/app/*" element={<AppViewLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default MainLayout;
