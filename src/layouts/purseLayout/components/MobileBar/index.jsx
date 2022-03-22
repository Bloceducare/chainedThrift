import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { purseSideBar } from "../../../../static/data";

const MobileBar = ({theme, activeTab, setActiveTab}) => {
  // const [activeTab, setActiveTab] = useState(purseSideBar[0].name);
  console.log({theme, activeTab, setActiveTab})
  const navigate = useNavigate();
  return (
    <div className={`flex w-full pt-8 border-b-2 ${theme ==='dark'? 'border-b-white': 'border-b-dark-1' } md:hidden`}>
      {purseSideBar.map((item, idx) => (
        <div
          key={item.name}
          className={
            activeTab === item.name
            ? `flex Poppins justify-center items-center border-b-4 w-1/4 ${theme === 'dark'? '': ''} border-b-white cursor-pointer`
            : "flex Poppins justify-center items-center cursor-pointer w-[calc(25%)]"
          }
          onClick={() => {
            setActiveTab(item.name);
            navigate(item.link);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default MobileBar;
