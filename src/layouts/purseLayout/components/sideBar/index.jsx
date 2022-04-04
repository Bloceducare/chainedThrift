import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { purseTabsLink } from "../../../../static/data";
import { BsArrowLeftShort } from "react-icons/bs";
import clsx from "clsx";

const SideBar = ({ currentTab }) => {
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
                {purseTabsLink.map((item) => (
                    <div
                        key={item.name}
                        className={clsx({
                            "Poppins text-sm cursor-pointer text-white-1 hover:text-purple-2 flex items-center h-12 hover:bg-gray-3 pl-8 hover:border-l-2 border-l-white-1": true,
                            "text-gray-15 bg-purple-3":
                                item.name.toLocaleLowerCase() === currentTab,
                        })}
                        onClick={() => {
                            navigate(item.link);
                        }}
                    >
                        <img
                            src={item.icon}
                            alt="link icon"
                            className="w-6 h-6 mr-2"
                        />
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
