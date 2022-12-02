import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingViewLayout from "./viewsLayout/landingViewLayout";
import AppViewLayout from "./viewsLayout/appViewLayout";
import NotFound from "./notFound";
import AppProvider from "../providers/appProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const MainLayout = () => {
    return (
        <GoogleOAuthProvider clientId="784150015711-4uc18grcq9hrjju7mnsb6fj2ps4n4bpj.apps.googleusercontent.com">
            <AppProvider>
                <Routes>
                    <Route path="/*" element={<LandingViewLayout />} />
                    <Route path="/app/*" element={<AppViewLayout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </AppProvider>
        </GoogleOAuthProvider>
    );
};

export default MainLayout;
