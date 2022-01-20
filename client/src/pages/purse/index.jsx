import React from "react";
import LisplayBox from "../../layout/purseLayout/components/listDisplayBox";

const Purse = () => {
  return (
    <div className="w-full bg-dark-1 h-3/4 text-white-1 px-8">
      <LisplayBox />
      <div className="flex flex-col items-center">
        <div className="h-32 w-32 bg-indigo-700 rounded-full text-white-1 flex justify-center items-center mt-16">
          <div className="h-28 w-28 bg-gray-16 rounded-full"></div>
        </div>
        <div className="text-white-1 mt-12 flex justify-between lg:w-2/5">
          <p className="Poppins font-medium text-sm">Available Members</p>
          <p className="Poppins font-medium text-sm">Members Expected</p>
        </div>
        <div className="mt-8">
          <p className="Poppins font-semibold text-lg text-center">
            Dont know about BentoBox?
          </p>
          <p className="Poppins font-normal text-sm text-center text-purple-1 underline underline-offset-4 cursor-pointer">
            Learn more about BentoBox
          </p>
        </div>
      </div>
    </div>
  );
};

export default Purse;
