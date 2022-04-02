import React, { Suspense, lazy, useState, useEffect, useCallback } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../fallback";
import { appRoutes } from "../../utils/routes";
import {ConnectWalletModal, openWalletModal, closeWalletModal} from '../../common/connectWalletModal';
import {ModalWrapper} from "../../common/modalWrapper";
import {useSelector, useDispatch} from "react-redux"
import { Web3ReactProvider} from '@web3-react/core'
import { getLibrary } from '../../web3'
import AppHeader from "../../common/appHeader/appHeader";
import { appNav } from "../../static/data";
import { useEagerConnect } from "../../web3";
import AppSideDrawer from "../../common/appSideDrawer/appSideDrawer";
const Swap = lazy(() => import("../../pages/swap/swap"));
const Purses = lazy(() => import("../../pages/purses/purses"));
const PurseLayout = lazy(() => import("../purseLayout/purseLayout"));
const CreatePurse = lazy(() => import("../../pages/createPurse/createPurse"))
const NotFound = lazy(()=> import("../notFound"))


const AppViewLayout = () => {
  const ConnectWalletModalState = useSelector(state => state.ConnectWalletModal);
  const dispatch = useDispatch()

  const handleWalletModalClose = () => {
    dispatch(closeWalletModal());
  }
  const handleWalletModalOpen = () => {
    dispatch(openWalletModal());
  }

  const [openSidebar, setOpenSidebar] = useState(false)
  const [renderSideDrawer, setRenderSideDrawer] = useState(window.innerWidth < 1024)

  const toggleDrawer = () => {
    setOpenSidebar((prevState) => !prevState)
  }
  const mql = window.matchMedia(`(max-width: 1023px)`);

  const mediaQueryChanged = useCallback(() => {
      setRenderSideDrawer(mql.matches);
      // if not rendered, set show to false so it will not open automatically next time we get on small screen
      if(!mql.matches)
        setOpenSidebar(mql.matches);
  },[mql]);
  

  
  

  useEffect(() => {
    mql.addEventListener("change", mediaQueryChanged)
  
    return () => {
      mql.removeEventListener("change", mediaQueryChanged);
    }
  }, [mediaQueryChanged, mql])


  useEagerConnect()

  
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppHeader
        data={appNav}
        displayWalletModal = {handleWalletModalOpen}
        toggleDrawer = {toggleDrawer}
      />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path={appRoutes.swap} element={<Swap />} />
          <Route path={appRoutes.purses} element={<Purses />} />
          <Route path={appRoutes.new_purse} element={<CreatePurse />} />
          <Route path={appRoutes.purse} element={<PurseLayout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {renderSideDrawer &&
        <AppSideDrawer
          navData={appNav}
          open = {openSidebar}
          toggleDrawer = {toggleDrawer}
        />
      }
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
