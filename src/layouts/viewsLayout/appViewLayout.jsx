import React, { Suspense, lazy } from "react";
import useTheme from "../../hooks/useTheme";
import { Routes, Route, Navigate } from "react-router-dom";
import Fallback from "../fallback";
import { appRoutes, absoluteRoutes } from "../../utils/routes";
import {ConnectWalletModal, openWalletModal, closeWalletModal} from '../../common/connectWalletModal';
import {ModalWrapper} from "../../common/modalWrapper";
import {useSelector, useDispatch} from "react-redux"
import { Web3ReactProvider} from '@web3-react/core'
import { getLibrary } from '../../web3'
import AppHeader from "../../common/appHeader/appHeader";
import { innerNav } from "../../static/data";
import { useEagerConnect } from "../../web3";
const Swap = lazy(() => import("../../pages/swap/swap"));
const Purses = lazy(() => import("../../pages/purses/purses"));
const PurseLayout = lazy(() => import("../purseLayout/purseLayout"));
const CreatePurse = lazy(() => import("../../pages/createPurse/createPurse"))


const AppViewLayout = () => {
  const ConnectWalletModalState = useSelector(state => state.ConnectWalletModal);
  const dispatch = useDispatch()

  const handleWalletModalClose = () => {
    dispatch(closeWalletModal());
  }
  const handleWalletModalOpen = () => {
    dispatch(openWalletModal());
  }


  useEagerConnect()

  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppHeader
        data={innerNav}
        displayWalletModal = {handleWalletModalOpen}
      />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path={appRoutes.swap} element={<Swap />} />
          <Route path={appRoutes.purses} element={<Purses />} />
          <Route path={appRoutes.new_purse} element={<CreatePurse />} />
          <Route path={appRoutes.purse} element={<PurseLayout />} />
          <Route path="*" element={<Navigate to={absoluteRoutes.purses} />} />
        </Routes>
      </Suspense>
      <ModalWrapper
        open = {ConnectWalletModalState.open}
        onClose = {handleWalletModalClose}
        label = "Connect wallet modal"
      >
        <ConnectWalletModal
          onClose={handleWalletModalClose} 
        />
      </ModalWrapper>
    </Web3ReactProvider>
  );
};

export default AppViewLayout;
