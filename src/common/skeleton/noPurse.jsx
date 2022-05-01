import React from 'react';
import Button from '../buttons/button'

function NoPurseSkeleton() {
  return (
    <div className="flex animate-pulse flex-col items-center">
      <div className="h-32 w-32 text-indigo rounded-3xl text-white-1 flex justify-center items-center">
        <img src="/assets/purse_wallet.svg" alt="wallet"/>
      </div>
      <div className="w-full md:w-3/6 mt-8 lg:px-8">
        <p className="dark:text-white-1 text-dark-1 font-bold text-sm text-center">
          
        </p>
      </div>
      <div className="text-white-1 mt-6 flex flex-col md:flex-row justify-between lg:w-2/5">
        <Button
          className="font-medium md:mr-4"
        >
        </Button>
        <Button
          className="font-medium md:ml-4"
        >

        </Button>
      </div>
    </div>
    )
}

export default NoPurseSkeleton