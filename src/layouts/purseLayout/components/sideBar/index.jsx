import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { purseSideBar } from "../../../../static/data";
import {BsArrowLeftShort} from "react-icons/bs"

const SideBar = () => {
  const [activeTab, setActiveTab] = useState(purseSideBar[0].name);

  const navigate = useNavigate();
  return (
    <div className="bg-blue-gradient h-screenfit w-48 hidden md:block">
      <div className="w-48 h-40 flex justify-center items-center">
        <BsArrowLeftShort 
          className="text-white-1 text-2xl cursor-pointer"
          onClick={() => navigate("/app/purses")}
        />
      </div>
      <div className="">
        {purseSideBar.map((item, idx) => (
          <div
            key={item.name}
            className={
              activeTab === item.name
                ? "Poppins text-sm cursor-pointer text-gray-15 flex items-center h-12 bg-purple-3 pl-8 border-l-2 border-l-white-1"
                : "Poppins text-sm cursor-pointer text-white-1 hover:text-purple-2 flex items-center h-12 hover:bg-gray-3 pl-8 hover:border-l-2 border-l-white-1"
            }
            onClick={() => {
              navigate(item.link);
              setActiveTab(item.name);
            }}
          >
            <img src={item.icon} alt="link icon" className="w-6 h-6 mr-2" />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
