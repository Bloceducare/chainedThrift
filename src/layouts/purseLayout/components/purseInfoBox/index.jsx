import React from "react";

const PurseInfoBox = ({ icon:Icon, dataKey, dataValue }) => {

  return (
    <div className = "bg-overlay-purse bg-right bg-no-repeat h-auto md:h-28  bg-pallet-3 p-2 sm:py-4 md:py-2 rounded-xl md:rounded-2xl items-center border-purple-1 border flex flex-col sm:flex-row">
      <Icon className = "block  text-2xl md:text-3xl lg:text-5xl lg:mr-4" />
      <div className = "sm:ml-4 text-center sm:text-left">
        <span className = "block text-white-1 Poppins text-xs md:text-xl">{dataKey}</span>
        <span className = "block text-white-1 Poppins text-xs font-light">{dataValue}</span>
      </div>
    </div>
  );
};

export default PurseInfoBox;
