import React from "react";

const Purse = ({ created, member, tvl, purseId, onClick,}) => {
  return (
    <div
      className={`h-44   dark:bg-dark-2 bg-blue-7 p-4 rounded-2xl cursor-pointer`}
      onClick={() => onClick(purseId)}
    >
      <div className="flex justify-between">
        <div className="Poppins text-xl font-extrabold text-purple-1">0xBBB6...e96e</div>
        <div>
          <img src="/assets/lock.svg" alt="coin" className="img-responsive rounded-2xl" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <p className="dark:text-white-1 text-dark-2   font-thin text-sm">Created</p>
          <p className="dark:text-white-1 text-dark-2 text-white-1 font-bold">{created}</p>
        </div>
        <div className="text-center">
          <p className="dark:text-white-1 text-dark-2 font-thin text-sm">Current Members</p>
          <p className="dark:text-white-1 text-dark-2 font-bold">{member}</p>
        </div>
        <div>
          <p className="Poppins dark:text-white-1 text-dark-2 font-thin text-sm">Amount(TVL)</p>
          <p className="Poppins dark:text-white-1 text-dark-2 font-bold">{tvl}</p>
        </div>
      </div>
    </div>
  );
};

export default Purse;
