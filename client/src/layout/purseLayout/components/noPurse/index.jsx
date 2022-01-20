import React from "react";
import Button from "../../../../components/buttons/Button";

const NoPurse = ({ openCreatePurse, openJoinPurse }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-32 w-32 bg-indigo-700 rounded-3xl text-white-1 flex justify-center items-center">
        Image
      </div>
      <div className="w-full md:w-3/6 mt-8 lg:px-8">
        <p className="text-white-1 text-sm text-center">
          New to Purse? A Purse is a Decentralized Thrift (i.e, it requires no
          trust) where different individual come together to form a group with
          the aim of putting money together to be disbursed to each member of
          the Purse in turn till everyone gets his/her own
        </p>
      </div>
      <div className="text-white-1 mt-6 flex flex-col md:flex-row justify-between lg:w-2/5">
        <Button
          className="font-medium md:mr-4"
          action={() => {
            openCreatePurse(true);
          }}
        >
          Create a Purse
        </Button>
        <Button
          className="font-medium md:ml-4"
          action={() => {
            openJoinPurse(true);
          }}
        >
          Join a Purse
        </Button>
      </div>
    </div>
  
  );
}

export default NoPurse;
