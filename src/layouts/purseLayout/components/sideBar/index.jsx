import React from "react";
import { useNavigate } from "react-router-dom";
import { purseTabsLink } from "../../../../static/data";
import { BsArrowLeftShort } from "react-icons/bs";
import clsx from "clsx";

// width: 10px;
// height: 10px;
// position: relative;
// border-radius: 20px;

const SideBar = ({ currentTab, id }) => {
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
                {/* <div className="w-2.5 h-2.5 rounded-lg relative bg-red-500"></div> */}
                {purseTabsLink.map((item) => (
                
                    <div
                        key={item.name}
                        className={clsx({
                            "Poppins text-sm relative cursor-pointer text-white-1 hover:text-purple-2 flex items-center h-12 hover:bg-gray-3 pl-8 hover:border-l-2 border-l-white-1": true,
                            "text-gray-15 bg-purple-3":
                                item.name.toLocaleLowerCase() === currentTab,
                        })}
                        onClick={() => {
                            navigate(item.link === '/'? `/app/purse/${id}`: item.link);
                        }}
                    >
                       {item.name.toLocaleLowerCase() === currentTab && <div className="w-2.5 h-2.5 rounded-lg absolute bg-pallet-4 right-12"></div> }  
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
