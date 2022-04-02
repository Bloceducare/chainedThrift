import React from "react";
import { shortenAddress } from "../../../../utils";

const Purse = ({purse}) => {
  const open = purse.members.length < purse.maxMember ? true : false;
  return (
    <div
      className="h-44   dark:bg-dark-2 bg-blue-7 p-4 rounded-2xl cursor-pointer"
      // onClick={() => onClick(purseId)}
    >
      <div className="flex justify-between">
        <span className="Poppins text-xl font-extrabold text-purple-1">{shortenAddress(purse.address)}</span>
        <div>
          <img src={open ? "/assets/lock_open.png" : "/assets/lock.png"} alt="purse state" className={open ? "" : "invert brightness-60"} />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <span className="block dark:text-white-1 text-dark-2 font-thin text-sm">Created on</span>
          <span className="block dark:text-white-1 text-dark-2 font-bold">{purse.createdOn}</span>
        </div>
        <div className="">
          <span className="block dark:text-white-1 text-dark-2 font-thin text-sm">Current Members</span>
          <span className="block dark:text-white-1 text-dark-2 font-bold">{purse.members.length}</span>
        </div>
        <div>
          <span className="Poppins block dark:text-white-1 text-dark-2 font-thin text-sm">Amount(TVL)</span>
          <span className="Poppins block dark:text-white-1 text-dark-2 font-bold">{purse.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default Purse;
