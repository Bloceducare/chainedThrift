import React, {useState} from "react";
import {CgCloseR} from 'react-icons/cg'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import Backdrop from "../backdrop";
import { connectorsData, useEagerConnect } from "../../web3";
import { useWeb3React } from "@web3-react/core";
import { getConnectionError } from "../../web3";
import clsx from 'clsx';
import './index.scss'

const ConnectWalletModal = ({show, dismissModal}) => {

    const {active, activate, connector, account, error} = useWeb3React();

    // helps to connect quickly incase the user previusly has browser wallet connected
    const triedEagerConnect = useEagerConnect();
    

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = useState(undefined);

    const connectWallet = (connector) => {
        setActivatingConnector(JSON.stringify(connector));
        activate(connector, handleError)
    }

    const handleError = (err) => {
        const errorString = getConnectionError(err);
        // the errorString will be used to triger error snackbar
        console.log("Yay: ", errorString)
    }

    return(
        <div>
            {show && <Backdrop dismissModal = {dismissModal} />}
            <div className={clsx({"absolute top-1/2 left-1/2 w-72 md:w-96 -translate-x-1/2 -translate-y-full opacity-0 -z-20 bg-gray-4 p-6 rounded-3xl modal": true, "show-modal": show})}>
                <div className = "flex justify-between items-center text-white-1 font-semibold text-xl">
                    <h2>Connect Wallet</h2>
                    <CgCloseR className = "cursor-pointer" onClick = {dismissModal}/>
                </div>
                <div className="">
                    <div className="bg-gray-5 text-gray-6 p-4 rounded-xl w-full mt-6 mb-10 text-left align-middle flex">
                        <BsFillCheckSquareFill className="text-blue-1 mr-4 mt-1 w-6 h-6"/>
                        <span className="text-xs md:text-base">
                            <span>I have read, understood, and agreed</span>
                            <span>to <a href = "#" className="text-blue-1">terms of service</a></span>
                        </span>
                    </div>
                    {connectorsData.map((connectorObj, idx) => {
                        const currentConnector = connectorObj.connector;
                        const isActivating = currentConnector === activatingConnector;
                        const isConnected = currentConnector === connector
                        const shouldBeDisabled = !triedEagerConnect || !!activatingConnector || isConnected || !!error
                        return(
                            <button key={idx}
                                className={clsx({"bg-gray-5 text-white-1 p-2 md:p-4 rounded-xl md:rounded-2xl block w-full mt-4 text-left align-middle": true, "opacity-60 cursor-not-allowed": shouldBeDisabled})}
                                onClick={() => connectWallet(connectorObj.connector)}
                            >
                                <img className="w-10 md:w-12 h-10 md:h-12 inline-block mr-6" src = {connectorObj.iconUrl} />
                                <span className="inline-block text-base">{connectorObj.name}</span>
                            </button>
                        )
                    })}
                </div>

                <div className="mt-6 text-sm text-gray-6">
                    <p>New to Wallet?</p>
                    <a href = "https://ethereum.org/wallets/" target="_blank" className="text-blue-1">Learn more about wallets</a>
                </div>

            </div>
        </div>
    )
}

export default ConnectWalletModal;
