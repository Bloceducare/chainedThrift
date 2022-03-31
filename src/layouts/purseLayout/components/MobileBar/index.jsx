import clsx from "clsx";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { purseSideBar } from "../../../../static/data";

const MobileBar = ({theme, activeTab, setActiveTab}) => {
  console.log({theme, activeTab, setActiveTab})
  const navigate = useNavigate();
  return (
    <div className="flex w-full pt-8 border-b-2 dark:border-b-white border-b-dark-1 md:hidden text-dark-1 dark:text-white-1">
      {purseSideBar.map((item, idx) => (
        <button
          key={idx}
          className={clsx({"flex Poppins justify-center items-center cursor-pointer text-xs md:text-base": true, "border-b-4 w-1/4 dark:border-b-none dark:border-b-white border-b-dark-1": activeTab === item.name, "w-[calc(25%)]": activeTab !== item.name})}
          onClick={() => {
            setActiveTab(item.name);
            navigate(item.link);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default MobileBar;
