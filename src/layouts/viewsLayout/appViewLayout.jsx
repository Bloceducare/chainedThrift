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
import HeaderButton from "../../common/appHeader/appHeader";
import { innerNav } from "../../static/data";
import { useEagerConnect } from "../../web3";
const Swap = lazy(() => import("../../pages/swap/swap"));
const Purses = lazy(() => import("../../pages/purses/purses"));
const PurseLayout = lazy(() => import("../purseLayout/purseLayout"));


const AppViewLayout = () => {
  const {theme, changeTheme} = useTheme()
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
      <HeaderButton
        theme={theme}
        changeTheme={changeTheme}
        data={innerNav}
        displayWalletModal = {handleWalletModalOpen}
      />
      <main>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={appRoutes.swap} element={<Swap />} />
            <Route path={appRoutes.purses} element={<Purses theme={theme} changeTheme={changeTheme} />} />
            <Route path={appRoutes.purse} element={<PurseLayout />} />
            <Route path="*" element={<Navigate to={absoluteRoutes.purses} />} />
          </Routes>
        </Suspense>
      </main>
      <ModalWrapper
        open = {ConnectWalletModalState.open}
        onClose = {handleWalletModalClose}
        label = "Connect wallet modal"
      >
        <ConnectWalletModal theme={theme} onClose={handleWalletModalClose} />
      </ModalWrapper>
    </Web3ReactProvider>
  );
};

export default AppViewLayout;
