import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallback from "../fallback/";
import { appRoutes, absoluteRoutes } from "../../utils/routes";
import ConnectWalletModal from '../../components/connectWalletModal';
import { Web3ReactProvider} from '@web3-react/core'
import { getLibrary } from '../../web3'
import Navbar from "../../components/appHeader";
import { innerNav } from "../../static/data";
// import { useEagerConnect } from "../web3/walletHooks";
const Swap = lazy(() => import("../../pages/swap"));
const Purses = lazy(() => import("../../pages/purses"));
const PurseLayout = lazy(() => import("../../layout/purseLayout"));

const AppView = () => {

  const [displayWalletModal, setDisplayWalletModal] = useState(true)
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Navbar data={innerNav} />
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={appRoutes.swap} element={<Swap />} />
            <Route path={appRoutes.purses} element={<Purses />} />
            <Route path={appRoutes.purse} element={<PurseLayout />} />
            <Route path="*" element={<Navigate to={absoluteRoutes.purses} />} />
          </Routes>
        </Suspense>
        { displayWalletModal && <ConnectWalletModal dismissModal = {() => setDisplayWalletModal(!displayWalletModal)} /> }
      </main>
      </Web3ReactProvider>
  );
};

export default AppView;
