import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { connectorsData, useEagerConnect } from "../../web3";
import { useWeb3React } from "@web3-react/core";
import { getConnectionError } from "../../web3";
import clsx from "clsx";

const ConnectWalletModal = ({ onClose }) => {
  // console.log(theme)

  // const {active, activate, connector, account, error} = useWeb3React();
  const { activate, connector, error } = useWeb3React();

  // helps to connect quickly incase the user previusly has browser wallet connected
  const triedEagerConnect = useEagerConnect();

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState(undefined);

  const connectWallet = (connector) => {
    setActivatingConnector(JSON.stringify(connector));
    activate(connector, handleError);
  };

  const handleError = (err) => {
    const errorString = getConnectionError(err);
    // the errorString will be used to triger error snackbar
    console.log("Yay: ", errorString);
  };

  return (
    <>
      <div className="flex justify-between items-center text-white-1 font-semibold text-xl">
        <h2 className="dark:text-white-1 text-dark-1">Connect Wallet</h2>
        <CgCloseR className="cursor-pointer" onClick={onClose} />
      </div>
      <div className="">
        <div
          className={`text-gray-6 p-2 rounded md:rounded-xl w-full mt-6 mb-4 text-left`}
        >
          <span className="text-base md:text-base">
            <span>By connecting a wallet, you have agreed to chained thrift </span>
            <span>
              <a href="#" className="text-blue-1">
                terms of service
              </a>
            </span>
          </span>
        </div>
        {connectorsData.map((connectorObj, idx) => {
          const { name, connector, icon: Icon } = connectorObj;
          return (
            <button
              key={idx}
              className={clsx({
                "bg-gray-5 text-white-1 dark:bg-gray-5 bg-white-1 p-2 rounded md:rounded-xl block w-full mt-4 text-left align-middle": true,
                "opacity-60 cursor-not-allowed": false,
              })}
              onClick={() => connectWallet(connector)}
            >
              <Icon width="35px" className="inline-block mr-6" />
              <span
                className={`inline-block text-base dark:text-white-1 text-dark-1`}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 text-sm text-gray-6">
        <p>New to Wallet?</p>
        <a
          href="https://ethereum.org/wallets/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-1"
        >
          Learn more about wallets
        </a>
      </div>
    </>
  );
};

export { ConnectWalletModal };

export default ConnectWalletModal;
