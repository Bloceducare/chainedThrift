import clsx from "clsx";
import React from "react";
import { useNavigate } from "react-router-dom";
import { purseTabsLink } from "../../../../static/data";

const MobileBar = ({currentTab}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full pt-8 border-b-2 dark:border-b-white border-b-dark-1 md:hidden text-dark-1 dark:text-white-1">
      {purseTabsLink.map((item, idx) => (
        <button
          key={idx}
          className={clsx({
            "w-1/4 flex Poppins justify-center items-center cursor-pointer text-xs md:text-base": true,
            "border-b-4 dark:border-b-none dark:border-b-white border-b-dark-1": currentTab === item.name.toLowerCase(),
          })}
          onClick={() => {
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
