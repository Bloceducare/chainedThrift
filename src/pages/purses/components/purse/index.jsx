import React from "react";
import { shortenAddress } from "../../../../utils";
import { useNavigate, useParams } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import PurseSkeleton from "../../../../common/skeleton/purseSkeleton";



const Purse = ({purse,loading}) => {
  const {account} = useWeb3React();
  let navigate = useNavigate()
  const purseRouteHandler = () =>{
    if(purse.members.includes(account)){
      return navigate(`/app/purse/${purse.address}`)
    }
    navigate(`/app/view/purse/${purse.address}`)
  } 
  const open = purse.members.length < purse.maxMember ? true : false;
  return (

    <>
    {loading? <PurseSkeleton/> :
    <div
      className="h-44 dark:bg-dark-2 bg-blue-7 p-4 rounded-2xl cursor-pointer"
      onClick={purseRouteHandler}
    >
      <div className="flex justify-between">
        <span className="Poppins text-xl font-extrabold text-purple-1">{shortenAddress(purse.address)}</span>
        <div>
          <img src={open ? "/assets/lock_open.png" : "/assets/lock.png"} alt="purse state" className={open ? "" : ""} />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <span className="block dark:text-white-1 text-dark-2 font-thin text-sm">Created on</span>
          <span className="block dark:text-white-1 text-dark-2 font-bold">{purse.timeCreated}</span>
        </div>
        <div className="">
          <span className="block dark:text-white-1 text-dark-2 font-thin text-sm">Current Members</span>
          <span className="block dark:text-white-1 text-dark-2 font-bold">{purse.members.length}</span>
        </div>
        <div>
          <span className="Poppins block dark:text-white-1 text-dark-2 font-thin text-sm">Amount(TVL)</span>
          <span className="Poppins block dark:text-white-1 text-dark-2 font-bold">{purse.deposite_amount}</span>
        </div>
      </div>
    </div> }

    </>
  );
};

// 07065328380
export default Purse;
