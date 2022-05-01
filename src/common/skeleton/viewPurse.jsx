import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";


const ViewPurseSkeleton = () => {

    return (
        <>

        <main className="bg-overlay-img-light animate-pulse dark:bg-overlay-img bg-cover min-h-screen">
            <section className="container flex flex-col mx-auto h-auto px-8 md:px-0 mt-12 dark:text-white-1">
                <div className="lg:mx-36 md:mx-24 mt-2 md:mt-6">
                    <div className="flex items-center mb-2">
                        <IoIosArrowBack className="dark:text-white/80 -ml-1" />
                        <span className="text-xs w-6 bg-gray-500 h-4 cursor-pointer font-light"></span>
                    </div>
                    <div className="flex justify-between w-full mb-4">
                        <p className="Montserrat w-24 bg-gray-500 h-4 font-bold md:text-2xl">
                        </p>
                        <div className="flex gap-2 items-center mb-2 mt-1">
                            <AiOutlineShareAlt className="dark:text-white/80 -ml-1" />
                            <p className="text-xs w-24 bg-gray-500 h-4 font-light">
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center mb-2">
                        <span className="text-sm  w-8 bg-gray-500 h-4 font-light">
                        </span>
                        {/* <ImNotification className="text-white-1  bg-gray-500 -ml-1" /> */}
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-4 mb-8 w-full">

                    <div className="flex justify-between rounded-lg mb-2 md:mb-0 md:w-[calc(100%/3)] bg-purple-gradient-1 h-24 px-2 py-6">
            <div className="w-1/2 flex items-center flex-col justify-center border-r border-[#F6F6FC]">
                <p className="text-xs Poppins font-light"></p>
                <p className="text-xs Poppins font-bold"></p>
            </div>
            <div className="w-1/2 flex items-center flex-col justify-center">                
                    <>
                        <p className="text-xs Poppins font-light"></p>
                        <p className="text-xs Poppins font-bold"></p>
                    </>
                
            </div>
        </div>
        <div className="flex justify-between rounded-lg mb-2 md:mb-0 md:w-[calc(100%/3)] bg-purple-gradient-1 h-24 px-2 py-6">
            <div className="w-1/2 flex items-center flex-col justify-center border-r border-[#F6F6FC]">
                <p className="text-xs Poppins font-light"></p>
                <p className="text-xs Poppins font-bold"></p>
            </div>
            <div className="w-1/2 flex items-center flex-col justify-center">
                                
                    <>
                        <p className="text-xs Poppins font-light"></p>
                        <p className="text-xs Poppins font-bold"></p>
                    </>
                
            </div>
        </div>
        <div className="flex justify-between rounded-lg mb-2 md:mb-0 md:w-[calc(100%/3)] bg-purple-gradient-1 h-24 px-2 py-6">
            <div className="w-1/2 flex items-center flex-col justify-center border-r border-[#F6F6FC]">
                <p className="text-xs Poppins font-light"></p>
                <p className="text-xs Poppins font-bold"></p>
            </div>
            <div className="w-1/2 flex items-center flex-col justify-center">
                    {/* <img  className="w-1/2  h-8 bg-gray-300"  /> */}
                    <>
                        <p className="text-xs Poppins font-light"></p>
                        <p className="text-xs Poppins font-bold"></p>
                    </>
                
            </div>
        </div>
        </div>
                    
                    <p className="font-bold w-full bg-gray-500 h-8 Poppins text-xl sm:text-base">
                    </p>
                    <p className="Poppins w-full bg-gray-500 h-8 font-light">
                    </p>
                    <p className="Poppins w-full bg-gray-500 h-6 font-light mt-5">
                    </p>
                    <div className="mt-6 flex justify-between mb-12 items-center">
                        <button className="bg-gray-2 px-16 w-10 h-6 bg-gray-500 py-1 Poppins text-xs cursor-pointer rounded-md font-bold text-white-1"></button>
                        <div className="flex gap-4">
                            <p className="Poppins w-10 h-4 bg-gray-500 text-xs"></p>
                            <div>
                                <p className="Poppins w-14  h-4 bg-gray-500 text-xs"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    </>
    );
};

export default ViewPurseSkeleton;
