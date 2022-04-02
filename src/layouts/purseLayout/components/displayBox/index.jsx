import React from "react";

const DisplayBox = ({ icon:Icon, name, desc }) => {

  return (
    <div className = "h-auto md:h-28 dark:bg-dark-2 bg-white-1 p-2 sm:py-4 md:py-2 rounded-xl md:rounded-2xl items-center border-purple-1 border flex flex-col sm:flex-row">
      <Icon className = "block dark:text-white-1 text-dark-1 text-2xl md:text-3xl lg:text-5xl lg:mr-4" />
      <div className = "sm:ml-4 text-center sm:text-left">
        <span className = "block dark:text-white-1 text-dark-1 Poppins text-xs md:text-xl">{name}</span>
        <span className = "block dark:text-white-1 text-dark-1 Poppins text-xs font-light">{desc}</span>
      </div>
    </div>
  );
};

export default DisplayBox;
