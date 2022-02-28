import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../fallback";
import { absoluteRoutes } from "../../utils/routes";
const Landing = lazy(() => import("../../pages/landing/landing"));

const LandingViewLayout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path= {absoluteRoutes.landing} element={<Landing />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default LandingViewLayout;
