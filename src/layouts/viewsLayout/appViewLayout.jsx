import React, {
    Suspense,
    lazy,
    useState,
    useEffect,
    useCallback,
    Fragment,
} from "react";
import { Routes, Route } from "react-router-dom";
import Fallback from "../fallback";
import { appRoutes } from "../../utils/routes";
import {
    ConnectWalletModal,
    OPEN_WALLET_MODAL,
    CLOSE_WALLET_MODAL,
} from "../../common/connectWalletModal";
import {OPEN_ACCOUNT_DETAILS_MODAL, CLOSE_ACCOUNT_DETAILS_MODAL, AccountDetailsModal} from '../../common/accountDetailsModal'
import { ModalWrapper } from "../../common/modalWrapper";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "../../common/appHeader/appHeader";
import { appNav } from "../../static/data";
import AppSideDrawer from "../../common/appSideDrawer/appSideDrawer";
import { useEagerConnect } from "../../web3";
const Swap = lazy(() => import("../../pages/swap/swap"));
const Purses = lazy(() => import("../../pages/purses/purses"));
const PurseLayout = lazy(() => import("../purseLayout/purseLayout"));
const CreatePurse = lazy(() => import("../../pages/createPurse/createPurse"));
const NotFound = lazy(() => import("../notFound"));
const ViewPurse = lazy(() => import("../../pages/viewPurse/viewPurse"))

const AppViewLayout = () => {
    
    const connectWalletModalState = useSelector(
        (state) => state.connectWalletModal
    );

    const accountDetailsModalstate = useSelector(
        (state) => state.accountDetailsModal
    );
    const dispatch = useDispatch();

    const toggleWalletModalDisplay = () => {
        if(connectWalletModalState.open)
        return dispatch(CLOSE_WALLET_MODAL())

        return dispatch(OPEN_WALLET_MODAL())
    }

    const toggleAccountDetailsModalDisplay = () => {
        if(accountDetailsModalstate.open)
        return dispatch(CLOSE_ACCOUNT_DETAILS_MODAL())

        return dispatch(OPEN_ACCOUNT_DETAILS_MODAL())
    }


    // connecting eagerly
    useEagerConnect();

    const [openSidebar, setOpenSidebar] = useState(false);
    const [renderSideDrawer, setRenderSideDrawer] = useState(
        window.innerWidth < 1024
    );

    const toggleDrawer = () => {
        setOpenSidebar((prevState) => !prevState);
    };
    const mql = window.matchMedia(`(max-width: 1023px)`);

    const mediaQueryChanged = useCallback(() => {
        setRenderSideDrawer(mql.matches);
        // if not rendered, set show to false so it will not open automatically next time we get on small screen
        if (!mql.matches) setOpenSidebar(mql.matches);
    }, [mql]);

    useEffect(() => {
        mql.addEventListener("change", mediaQueryChanged);

        return () => {
            mql.removeEventListener("change", mediaQueryChanged);
        };
    }, [mediaQueryChanged, mql]);

    return (
        <Fragment>
            <AppHeader
                onClose={toggleAccountDetailsModalDisplay}
                data={appNav}
                displayWalletModal={toggleWalletModalDisplay}
                toggleDrawer={toggleDrawer}
            />
            <Suspense fallback={<Fallback />}>
                <Routes>
                    <Route path={appRoutes.swap} element={<Swap />} />
                    <Route path={appRoutes.purses} element={<Purses />} />
                    <Route path={appRoutes.view_purse} element={<ViewPurse />} />
                    <Route
                        path={appRoutes.new_purse}
                        element={<CreatePurse />}
                    />
                    <Route path={appRoutes.purse} element={<PurseLayout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            {renderSideDrawer && (
                <AppSideDrawer
                    navData={appNav}
                    open={openSidebar}
                    toggleDrawer={toggleDrawer}
                />
            )}
            <ModalWrapper
                open={connectWalletModalState.open}
                onClose={toggleWalletModalDisplay}
                label="Connect wallet"
            >
                <ConnectWalletModal onClose={toggleWalletModalDisplay} />
            </ModalWrapper>
            <ModalWrapper
                open={accountDetailsModalstate.open}
                onClose={toggleAccountDetailsModalDisplay}
                label="Account Details"
            >
                <AccountDetailsModal onClose={toggleAccountDetailsModalDisplay} />
            </ModalWrapper>
        </Fragment>
    );
};

export default AppViewLayout;
