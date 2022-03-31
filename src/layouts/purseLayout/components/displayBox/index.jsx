import React from "react";

const DisplayBox = ({ icon:Icon, name, desc }) => {

  return (
    <div className = "h-auto md:h-28 dark:bg-dark-2 bg-white-1 p-2 md:p-8 rounded-xl md:rounded-2xl md:flex items-center border-purple-1 border">
      <Icon className = "block dark:text-white-1 text-dark-1 text-xl md:text-2xl lg:text-3xl" />
      <div className = "sm:ml-4 flex flex-col items-center md:items-center">
        <p className = "dark:text-white-1 text-dark-1 Poppins text-center md:text-left text-xs md:text-xl">{name}</p>
        <p className = "dark:text-white-1 text-dark-1 Poppins text-center md:text-left text-xs font-light">{desc}</p>
      </div>
    </div>
  );
};

export default DisplayBox;
