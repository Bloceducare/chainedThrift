import React from "react";
import Button from "../../../../common/buttons/button";

const NoPurse = ({gotToExplorePursesTab, gotToCreateNewPurse}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-32 w-32 text-indigo rounded-3xl text-white-1 flex justify-center items-center">
        <img src="/assets/purse_wallet.svg" alt="wallet"/>
      </div>
      <div className="w-full md:w-3/6 mt-8 lg:px-8">
        <p className="dark:text-white-1 text-dark-1 font-bold text-sm text-center">
          New to Purse? A Purse is a Decentralized Thrift (i.e, it requires no
          trust) where different individual come together to form a group with
          the aim of putting money together to be disbursed to each member of
          the Purse in turn till everyone gets theirs
        </p>
      </div>
      <div className="text-white-1 mt-6 flex flex-col md:flex-row justify-between lg:w-2/5">
        <Button
          className="font-medium md:mr-4"
          action = {gotToCreateNewPurse}
        >
          Create a Purse
        </Button>
        <Button
          className="font-medium md:ml-4"
          action = {gotToExplorePursesTab}
        >
          Join a Purse
          
        </Button>
      </div>
    </div>
  
  );
}

export default NoPurse;
