import React, { Suspense, lazy, useState, useEffect, useCallback, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../fallback";
import { appRoutes } from "../../utils/routes";
import {ConnectWalletModal, openWalletModal, closeWalletModal} from '../../common/connectWalletModal';
import {ModalWrapper} from "../../common/modalWrapper";
import {useSelector, useDispatch} from "react-redux";
import AppHeader from "../../common/appHeader/appHeader";
import { appNav } from "../../static/data";
import AppSideDrawer from "../../common/appSideDrawer/appSideDrawer";
import { useEagerConnect } from "../../web3";
import AccountDetails from "../../common/accountDetails/accountDetails";
const Swap = lazy(() => import("../../pages/swap/swap"));
const Purses = lazy(() => import("../../pages/purses/purses"));
const PurseLayout = lazy(() => import("../purseLayout/purseLayout"));
const CreatePurse = lazy(() => import("../../pages/createPurse/createPurse"));
const NotFound = lazy(()=> import("../notFound"));


const AppViewLayout = () => {
  const ConnectWalletModalState = useSelector(state => state.ConnectWalletModal);
  const dispatch = useDispatch()

  const handleWalletModalClose = () => {
    dispatch(closeWalletModal());
  }
  const handleWalletModalOpen = () => {
    dispatch(openWalletModal());
  }

  const [accountDetails, setAccountDetails] = useState(false)

  const accountDetailsHandler = () =>{
    setAccountDetails(!accountDetails)
  }

  // connecting eagerly
    useEagerConnect();

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


  
  return (
    <Fragment>
      <AppHeader
        onClose={accountDetailsHandler}
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
      <ModalWrapper
        open = {accountDetails}
        onClose = {accountDetailsHandler}
        label = "AccountDetails"
      >
       <AccountDetails onClose={accountDetailsHandler}/>
      </ModalWrapper>
    </Fragment>
  );
};

export default AppViewLayout;