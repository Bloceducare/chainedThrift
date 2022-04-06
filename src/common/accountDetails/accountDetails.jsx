import React,{useState,useEffect} from 'react';
import { shortenAddress } from '../../utils/helpers';
import { useWeb3React } from "@web3-react/core";
import { CgCloseR } from "react-icons/cg";
import {FcCheckmark} from "react-icons/fc"
import {RiArrowRightUpLine} from "react-icons/ri"
import {copyToClipBoard} from "../../utils/helpers";
import { useToasts } from "react-toast-notifications";


function AccountDetails({onClose}) {
    const { account } = useWeb3React();
    const { addToast } = useToasts();
    const [copied, setCopied] = useState(false)

    const copyToClipBoardHandler = () =>{
        copyToClipBoard(account)
        setCopied(true)
    }


    useEffect(() => {
        if (copied) {
            addToast("Copied to clipboard", {
                appearance: "success",
            });
        }
        // eslint-disable-next-line
    }, [copied]);
  return (
    <div>

    <div className="flex justify-between mb-8 items-center text-white-1 font-semibold text-xl">
                <h2 className="dark:text-white-1 text-dark-1">
                    Account
                </h2>
                <CgCloseR
                    className="cursor-pointer dark:text-white-1 text-dark-1"
                    onClick={onClose}
                />
            </div>

            <div className='flex justify-between  mb-2 items-center'>
              <p className='dark:text-white font-bold text-xl'>{shortenAddress(account)}</p>
              <div className='flex items-center mb-4'>
                <a href='#!'><img className='w-10 mr-4' src="/assets/explorer.svg" alt="explore-btn"/></a>
                <button onClick={copyToClipBoardHandler}><img className='w-10 cursor-pointer' src="/assets/btn.svg" alt="copy-clipboard-text"/></button>
              </div>
            </div>

            <div className='flex justify-center mb-10'>
              <button className='dark:text-white bg-blue-600 p-2 font-bold font-Poppins rounded-lg'>Disconnect Wallet</button>
            </div>

            <div>
              <div className='flex justify-between mb-8 items-center'>
                <p className='dark:text-white font-bold'>Transactions</p>
                <button className='dark:text-blue-500 font-bold'>Clear All</button>
              </div>
              <div className='flex justify-between  mb-4 items-center'>
                <p className='dark:text-white font-normal flex items-center'>Stake <RiArrowRightUpLine size={25} className='ml-2 text-blue-500'/></p>
                <button className='dark:text-blue-500 font-bold'><FcCheckmark size={25}/></button>
              </div>
              <div className='flex justify-between mb-4 items-center'>
                <p className='dark:text-white font-normal flex items-center'>Approve DEXDLP <RiArrowRightUpLine size={25} className='ml-2 text-blue-500'/></p>
                <button className='dark:text-blue-500 font-bold'><FcCheckmark size={25}/></button>
              </div>
              <div className='flex justify-between mb-4 items-center'>
                <p className='dark:text-white font-normal flex items-center'>Add Liquidity<RiArrowRightUpLine size={25} className='ml-2  text-blue-500'/> </p>
                <button className='dark:text-blue-500 font-bold'><FcCheckmark size={25}/></button>
              </div>
              <div className=''>
                <p className='dark:text-slate-400 font-normal'>7.4812029 DEX</p>
                <p className='dark:text-slate-400 font-normal'>5812.291025829 MTV</p>
                <button className='dark:text-blue-500 font-bold'></button>
              </div>
            </div>
    </div>
  )
}

export default AccountDetails