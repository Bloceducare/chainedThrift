import React from "react";

const Purse = ({ created, member, tvl }) => {
  return (
    <div className="lg:w-128 w-96 h-44 bg-dark-2 mb-8 p-4 rounded-2xl">
      <div className="flex justify-between">
        <div className="text-purple-1">0xBBB6...e96e</div>
        <div>
          <img src="/assets/lock.svg" alt="coin" className="img-responsive" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <div>
          <p className="text-white-1">Created</p>
          <p className="text-white-1">{created}</p>
        </div>
        <div className="text-center">
          <p className="text-white-1">Current Members</p>
          <p className="text-white-1">{member}</p>
        </div>
        <div>
          <p className="text-white-1">Amount(TVL)</p>
          <p className="text-white-1">{tvl}</p>
        </div>
      </div>
    </div>
  );
}

export default Purse;
