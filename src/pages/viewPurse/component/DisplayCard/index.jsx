import React from "react";

export const DisplayCard = ({
    frequencyTitle,
    frequency,
    createdTitle,
    created,
    icon,
}) => {
    return (
        <div className="flex justify-between rounded-lg mb-2 md:mb-0 md:w-[calc(100%/3)] bg-purple-gradient-1 h-24 px-2 py-6">
            <div className="w-1/2 flex items-center flex-col justify-center border-r border-[#F6F6FC]">
                <p className="text-xs Poppins text-white font-light">{frequencyTitle}</p>
                <p className="text-xs Poppins text-white font-bold">{frequency}</p>
            </div>
            <div className="w-1/2 flex items-center flex-col justify-center">
                {icon ? (
                    <img src={icon} alt="icon" />
                ) : (
                    <>
                        <p className="text-xs Poppins text-white font-light">{createdTitle}</p>
                        <p className="text-xs Poppins text-white font-bold">{created}</p>
                    </>
                )}
            </div>
        </div>
    );
};
