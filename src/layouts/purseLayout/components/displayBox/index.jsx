import React from "react";

const DisplayBox = ({ icon, name, desc, theme }) => {

  return (
    <div className={`h-auto md:h-28 ${theme === 'dark'?'bg-dark-2': 'bg-white-1' } p-2 md:p-8 rounded-2xl flex items-center border-purple-1 border`}>
      <div className="">
        <div>
          <img
            src={icon}
            alt="coin"
            className="img-responsive"
          />
        </div>
      </div>
      <div className="ml-4 flex flex-col items-center">
        <p className={` ${theme === 'dark'?'text-white-1' : 'text-dark-1'} Poppins text-center text-xs md:text-xl`}>{name}</p>
        <p className={`${theme === 'dark'?'text-white-1' : 'text-dark-1'} Poppins text-xs font-light`}>{desc}</p>
      </div>
    </div>
  );
};

export default DisplayBox;
