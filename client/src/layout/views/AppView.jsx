import React, { Suspense, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallback from "../fallback/";
import { appRoutes, absoluteRoutes } from "../../utils/routes";
import ConnectWalletModal from '../../components/connectWalletModal';
import { Web3ReactProvider} from '@web3-react/core'
import { getLibrary } from '../../web3'
import HeaderButton from "../../components/appHeader";
import { innerNav } from "../../static/data";
// import { useEagerConnect } from "../web3/walletHooks";
const Swap = lazy(() => import("../../pages/swap"));
const Purses = lazy(() => import("../../pages/purses"));
const PurseLayout = lazy(() => import("../../layout/purseLayout"));

const AppView = () => {

  const [displayWalletModal, setDisplayWalletModal] = useState(false)

  const toggleWalletModalDisplay = () => setDisplayWalletModal(!displayWalletModal)
  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <HeaderButton
        data={innerNav}
        displayWalletModal = {toggleWalletModalDisplay}
      />
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={appRoutes.swap} element={<Swap />} />
            <Route path={appRoutes.purses} element={<Purses />} />
            <Route path={appRoutes.purse} element={<PurseLayout />} />
            <Route path="*" element={<Navigate to={absoluteRoutes.purses} />} />
          </Routes>
        </Suspense>
        <ConnectWalletModal
          show = {displayWalletModal}
          dismissModal = {toggleWalletModalDisplay}
        />
      </main>
      </Web3ReactProvider>
  );
};

export default AppView;
