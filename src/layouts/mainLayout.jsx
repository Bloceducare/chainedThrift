import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingViewLayout from "./viewsLayout/landingViewLayout";
import AppViewLayout from "./viewsLayout/appViewLayout";
import NotFound from "./notFound";
import AppProvider from "../providers/appProvider";

const MainLayout = () => {
    return (
        <AppProvider>
            <Routes>
                <Route path="/*" element={<LandingViewLayout />} />
                <Route path="/app/*" element={<AppViewLayout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AppProvider>
    );
};

export default MainLayout;
