import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingViewLayout from "./viewsLayout/landingViewLayout";
import AppViewLayout from "./viewsLayout/appViewLayout";
import NotFound from "./notFound";
import AppProvider from "../providers/appProvider";

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/*" element={<LandingViewLayout />} />
      <Route path="/app/*"
        element={
          <AppProvider>
            <AppViewLayout />
          </AppProvider>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
};

export default MainLayout;
