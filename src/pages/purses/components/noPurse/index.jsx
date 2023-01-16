import React from "react";
import Button from "../../../../common/buttons/button";
import NoPurseSkeleton from "../../../../common/skeleton/noPurse";

const NoPurse = ({ gotToExplorePursesTab, gotToCreateNewPurse, loading }) => {
  return (
    <>
      {loading ? <NoPurseSkeleton /> :
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-32 h-32 text-indigo rounded-3xl text-white-1">
            <img src="/assets/purse_wallet.svg" alt="wallet" />
          </div>
          <div className="w-full mt-8 md:w-3/6 lg:px-8">
            <p className="text-sm font-bold text-center dark:text-white-1 text-dark-1">
              New to Purse? Purse is a Decentralized Thrift (i.e, it requires no
              trust) where different individual come together to form a group with
              the aim of putting money together to be disbursed to each member of
              the Purse in turn till everyone gets theirs
            </p>
          </div>
          <div className="flex flex-col justify-between mt-6 text-white-1 md:flex-row lg:w-2/5">
            <Button
              className="font-medium md:mr-4"
              action={gotToCreateNewPurse}
            >
              Create a Purse
            </Button>
            <Button
              className="font-medium md:ml-4"
              action={gotToExplorePursesTab}
            >
              Join a Purse

            </Button>
          </div>
        </div>
      }
    </>

  );
}

export default NoPurse;
