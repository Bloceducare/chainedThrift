import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useParams } from "react-router-dom";
import SideBar from "./components/sideBar";
import Fallback from "../fallback";
import { purseRoutes, absoluteRoutes } from "../../utils/routes";
import PurseHeader from "./components/purseHeader";
import { useWeb3React } from "@web3-react/core";
import usePurse from "../../web3/hooks/usePurse";
import { ethers } from "ethers";

const Purse = lazy(() => import("../../pages/purse/purse"));
const PurseChat = lazy(() => import("../../pages/purseChat/purseChat"));
const PurseActions = lazy(() =>
    import("../../pages/purseActions/purseActions")
);
const PurseSettings = lazy(() =>
    import("../../pages/purseSettings/purseSettings")
);

const PurseLayout = () => {
    const {id} = useParams()
    const {active,account} = useWeb3React();
    let { pathname } = useLocation();
    const [currentTab, setCurrentTab] = useState(null);
    const { getCurrentRound, getUserClaimableDeposit } = usePurse()
    const [currentRound, setCurrentRound] = useState([])
    const [amount, setAmount] = useState(null)

    const fetchCurrentRoundDetails = async() =>{
        
        const result = await getCurrentRound(id)
        setCurrentRound({
            member:result[0],
            round:Number(result[1].toString()),
            timer:result[2].toString()

        })
    }

    const fetchClaimableReward = async() =>{
        const result = await getUserClaimableDeposit(account,id)
        const format = ethers.utils.formatUnits(result)
        setAmount(format)
    }


    const purseTabs = {
        OVERVIEW: "overview",
        ACTIONS: "actions",
        CHAT: "chat",
        SETTINGS: "settings",
    };



    useEffect(() =>{
        fetchClaimableReward();
    },
     /* eslint-disable */
    [active,account])

    useEffect(() => {
        // remove trailing slash if any
        fetchCurrentRoundDetails()
        const pathString = pathname.replace(/\/$/, "");
        const pathArr = pathString.split("/");
        if (pathArr.length === 5) {
            const path = pathArr[pathArr.length - 1];
            const tab = purseTabs[path.toUpperCase()];
            if (!tab) return;
            setCurrentTab(tab);
        } else if (pathArr.length === 4) {
            setCurrentTab(purseTabs.OVERVIEW);
        }
        // eslint-disable-next-line
    }, [pathname]);

    return (
        <div className="bg-overlay-img-light dark:bg-overlay-img bg-cover h-screen lg:h-screenfit">
            <div className="container h-full mx-auto flex bg-dark-4">
                <SideBar id={id} currentTab={currentTab} />
                <div className="w-full h-full dark:bg-dark-1 bg-white-1 text-white-1 px-8">
                    <PurseHeader currentTab={currentTab} currentRound={currentRound} amount={amount} />
                    <Suspense fallback={<Fallback />}>
                        <Routes>
                            <Route
                                path={purseRoutes.home}
                                element={<Purse />}
                            />
                            <Route
                                path={purseRoutes.chat}
                                element={<PurseChat/>}
                            />
                            <Route
                                path={purseRoutes.actions}
                                element={<PurseActions currentRound={currentRound} />}
                            />
                            <Route
                                path={purseRoutes.settings}
                                element={<PurseSettings />}
                            />
                            <Route
                                path="*"
                                element={
                                 <Navigate to={absoluteRoutes.purses} />
                            }
                            />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default PurseLayout;
