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
import {
    OPEN_ACCOUNT_DETAILS_MODAL,
    CLOSE_ACCOUNT_DETAILS_MODAL,
    AccountDetailsModal,
} from "../../common/accountDetailsModal";
import {
    OPEN_AUTH_MODAL,
    CLOSE_AUTH_MODAL,
    AuthModal,
    SAVE_AUTH_DETAILS_TO_STORE,
} from "../../common/AuthModal";
import {
    ModalWrapper,
    LoaderWrapper,
    AuthWrapper,
} from "../../common/modalWrapper";
import { useSelector, useDispatch } from "react-redux";
import AppHeader from "../../common/appHeader/appHeader";
import { appNav } from "../../static/data";
import AppSideDrawer from "../../common/appSideDrawer/appSideDrawer";
import { useEagerConnect } from "../../web3";
import { useWeb3React } from "@web3-react/core";
import Loader from "../../common/loader/loader";
import Button from "../../common/buttons/button";
import { useSignature } from "../../web3/hooks/useSignature";
import { useSignUpMessage, useSignInMessage } from "../../web3/constants";
import SignInWrapper from "../../common/modalWrapper/signInWrapper";
import { useToasts } from "react-toast-notifications";
// const Swap = lazy(() => import("../../pages/swap/swap"));
const Purses = lazy(() => import("../../pages/purses/purses"));
const PurseLayout = lazy(() => import("../purseLayout/purseLayout"));
const CreatePurse = lazy(() => import("../../pages/createPurse/createPurse"));
const NotFound = lazy(() => import("../notFound"));
const ViewPurse = lazy(() => import("../../pages/viewPurse/viewPurse"));

const AppViewLayout = () => {
    const { active, account } = useWeb3React();
    const { addToast } = useToasts();
    const connectWalletModalState = useSelector(
        (state) => state.connectWalletModal
    );

    const accountDetailsModalstate = useSelector(
        (state) => state.accountDetailsModal
    );

    const auths = useSelector((store) => store.auth)
  console.log(auths)

    const authModalState = useSelector((state) => state.authModal);

    const dispatch = useDispatch();
    const { sign } = useSignature();
    const {message} = useSignInMessage()
    const {signupmessage} = useSignUpMessage()

    const toggleWalletModalDisplay = () => {
        if (connectWalletModalState.open) return dispatch(CLOSE_WALLET_MODAL());

        return dispatch(OPEN_WALLET_MODAL());
    };

    const toggleAccountDetailsModalDisplay = () => {
        if (accountDetailsModalstate.open)
            return dispatch(CLOSE_ACCOUNT_DETAILS_MODAL());

        return dispatch(OPEN_ACCOUNT_DETAILS_MODAL());
    };

    const toggleAuthModalDisplay = () => {
        if (authModalState.open) return dispatch(CLOSE_AUTH_MODAL());

        return dispatch(OPEN_AUTH_MODAL());
    };

    // connecting eagerly
    useEagerConnect();

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState();

    const [open, setOpen] = useState(true);

    const closeSignInAuth = () => {
        setOpen(!open);
    };

    const createAccountHandler = async (email, username) => {
        let url = " http://localhost:8000/api/user/create-user";
        setLoading(true);
        try {
            let signatureOutput = await sign(signupmessage);
            let resData = {
                signature: signatureOutput,
                message: signupmessage,
                userData: {
                    walletAddress: account,
                    email: email,
                    username: username,
                },
            };

            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(resData),
                headers: {
                    "Content-type": "application/json",
                },
            });
            let error = await res.json();
            if (res.status !== 200) {
                setOpen(!open);
                setLoading(false);
                addToast(error.error.message, { appearance: "error" });
            } else {
                setLoading(false);
                localStorage.setItem("sig", signatureOutput)
                addToast("account created successfull", {
                    appearance: "success",
                });
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
        // get username and password field
        // call signSignature and return signature
    };

    const signHandler = async () => {
        let url = "http://localhost:8000/api/user/get-user";
        setLoading(true);
        try {
            let output = await sign(message);
            let resData = {
                signature: output,
                message: message,
                address: account,
            };
            
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(resData),
                headers: {
                    "Content-type": "application/json",
                },
            });
            let result = await response.json();
            dispatch(SAVE_AUTH_DETAILS_TO_STORE(result));
            localStorage.setItem("sig", output);
            setOpen(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    // check if user exist
    const checkUserExist = async () => {
        let formatAddress = account.toLowerCase();
        let url = `http://localhost:8000/api/user/check/?walletAddress=${formatAddress}`;
        setLoading(true);
        try {
            if (!active) return;
            const response = await fetch(url);
            const data = await response.json();
            setResponse(data.exist);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    let sig = localStorage.getItem("sig");

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

    useEffect(
        () => {
            if (active) {
                checkUserExist();
            }
        },
        /* eslint-disable */
        [active, account]
    );

    // check if account change and remove signature in localStorage
    useEffect(() => {
        const { ethereum } = window;

        const handleAccountsChanged = () => {
            localStorage.removeItem("sig");
            if (accounts.length > 0) {
                // eat errors
                activate(injected, undefined, true).catch((error) => {
                    console.error(
                        "Failed to activate after accounts changed",
                        error
                    );
                });
            }
        };
        ethereum.on("accountsChanged", handleAccountsChanged);

        return () => {
            if (ethereum.removeEventListener) {
                ethereum.removeListener(
                    "accountsChanged",
                    handleAccountsChanged
                );
            }
        };
    }, [account, active]);


    return (
        <Fragment>
            <AppHeader
                onClose={toggleAccountDetailsModalDisplay}
                data={appNav}
                displayWalletModal={toggleWalletModalDisplay}
                toggleDrawer={toggleDrawer}
            />
            <Suspense fallback={<Fallback />}>
                {loading && (
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                )}
                <Routes>
                    {/* <Route path={appRoutes.swap} element={<Swap />} /> */}
                    <Route path={appRoutes.purses} element={<Purses />} />
                    <Route
                        path={appRoutes.view_purse}
                        element={<ViewPurse />}
                    />
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
                <AccountDetailsModal
                    onClose={toggleAccountDetailsModalDisplay}
                />
            </ModalWrapper>
            {/* doesn't have an account yet and address is active */}
            { active && !loading && !response && (
                <AuthWrapper
                    open={authModalState.open}
                    onClose={toggleAuthModalDisplay}
                    label={"Create an account"}
                >
                    <AuthModal
                        onClose={toggleAuthModalDisplay}
                        createAccountHandler={createAccountHandler}
                    />
                </AuthWrapper>
            )}

            {/* has an account in db and connected and signature is null */}

            {/* At what point is signature null: if account change or sig expires */}

            {/* {!response && active && sig === null && !loading &&  (
                <SignInWrapper open={open} onClose={closeSignInAuth}>
                    <div className="flex justify-center">
                        <Button action={signHandler}>SignIn</Button>
                    </div>
                </SignInWrapper>
            )} */}

            {/* has account in db and connected and signature is not null */}
            {  active && response && !loading && !sig  && (
                <SignInWrapper open={open} onClose={closeSignInAuth}>
                    <div className="flex justify-center">
                        <Button action={signHandler}>SignIn</Button>
                    </div>
                </SignInWrapper>
            )}

            {/* {  active && !loading && sig !== null ? null : (
                <SignInWrapper open={open} onClose={closeSignInAuth}>
                    <div className="flex justify-center">
                        <Button action={signHandler}>SignIn</Button>
                    </div>
                </SignInWrapper>
            )} */}
        </Fragment>
    );
};

export default AppViewLayout;
