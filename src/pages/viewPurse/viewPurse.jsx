import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineShareAlt } from "react-icons/ai";
import { ImNotification } from "react-icons/im";
import { CardList } from "./component/CardList";

const ViewPurse = () => {
    return (
        <main className="bg-overlay-img-light dark:bg-overlay-img bg-cover min-h-screen">
            <section className="container flex flex-col mx-auto h-auto px-8 md:px-0 mt-12 dark:text-white-1">
                <div className="lg:mx-36 md:mx-24 mt-2 md:mt-6">
                    <div className="flex items-center mb-2">
                        <IoIosArrowBack className="dark:text-white/80 -ml-1" />
                        <span className="text-xs font-light">Go Back</span>
                    </div>
                    <div className="flex justify-between w-full mb-4">
                        <p className="Montserrat font-bold md:text-2xl">
                            0xBBB6...e96e
                        </p>
                        <div className="flex gap-2 items-center mb-2 mt-1">
                            <AiOutlineShareAlt className="dark:text-white/80 -ml-1" />
                            <p className="text-xs font-light">
                                Invite new member
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center mb-2">
                        <span className="text-sm font-light">
                            Purse Overview
                        </span>
                        <ImNotification className="text-white/80 -ml-1" />
                    </div>
                    <CardList />
                    <p className="font-bold Poppins text-xl sm:text-base">
                        Note:
                    </p>
                    <p className="Poppins font-light">
                        You are to deposit a collateral of 10.0 USDC which will
                        be put in yield farming. You can withdraw this
                        collateral plus the yield to your wallet immediately
                        after everyone have gotten their funds from the purse
                    </p>
                    <p className="Poppins font-light mt-5">
                        By clicking the "JOIN PURSE" button, you are sending
                        10.0 USDC as collateral and 10.0 USDC for the purse
                        amount which makes it total of 20 USDC
                    </p>
                    <div className="mt-6 flex justify-between mb-12 items-center">
                        <div className="bg-gray-2 px-16 py-1 Poppins text-xs rounded-md font-bold text-white-1">Join Purse</div>
                        <div className="flex gap-4">
                            <p className="Poppins text-xs">Due Date</p>
                            <div>
                                <p className="Poppins text-xs">25/12/2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ViewPurse;
