import React, { Suspense, lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "./fallback/";
import { routes } from "../utils/routes";
import ConnectWalletModal from '../components/connectWalletModal';
const Landing = lazy(() => import("../pages/landing"));
const Swap = lazy(() => import("../pages/swap"));
const Purses = lazy(() => import("../pages/purses"));
const PurseLayout = lazy(() => import("../layout/purseLayout"));
const NotFound = lazy(() => import("./notFound"));

const Layout = () => {

  const [displayWalletModal, setDisplayWalletModal] = useState(true)
  

  return (
    <>
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={routes.landing} element={<Landing />} />
            <Route path={routes.swap} element={<Swap />} />
            <Route path={routes.purses} element={<Purses />} />
            <Route path={routes.purse} element={<PurseLayout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        { displayWalletModal && <ConnectWalletModal dismissModal = {() => setDisplayWalletModal(!displayWalletModal)} /> }
      </main>
    </>
  );
};

export default Layout;
