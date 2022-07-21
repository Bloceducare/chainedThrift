import React, { useState, useEffect } from "react";
import PurseList from "./components/purseList";
import clsx from "clsx";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { absoluteRoutes } from "../../utils";
import { useNavigate, useSearchParams } from "react-router-dom";
import usePurseFactory from "../../web3/hooks/usePurseFactory";
import { useSelector } from "react-redux";
import { useWeb3React } from "@web3-react/core";

const Purses = () => {
    const { active, account } = useWeb3React();
    const navigate = useNavigate();
    const TABS = {
        ALL: "all",
        OWNED: "owned",
    };

    usePurseFactory();
    const [searchParams, setSearchParams] = useSearchParams();
    const tab = searchParams.get("tab");
    const purses = useSelector((store) => store.purses);
    const [ownedPurses, setOwnedPurses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!active || !purses?.length) {
            setOwnedPurses([]);
        }

        const myPurses = purses.filter((purse) =>
            purse.members.includes(account)
        );
        
        setOwnedPurses(myPurses);
        setLoading(false);
        // eslint-disable-next-line
    }, [active, purses]);
    console.log(purses, "purses")

    return (
        <main className="min-h-screen bg-cover bg-overlay-img-light dark:bg-overlay-img">
            <section className="container px-4 mx-auto sm:px-6 md:px-10 xl:px-0">
                <div className="flex justify-between mt-4 md:mt-12">
                    <h1 className="font-bold leading-tight font-Montserrat lg:text-3xl md:text-lg dark:text-white-1 text-dark-1">
                        Thrift Purses
                    </h1>
                    <button
                        className="border-purple-1 text-purple-1 cursor-pointer outline outline-offset-2 outline-1 rounded-lg px-6 py-1 after:content-['+'] after:px-2 after:py-1 after:rounded-full after:text-white-1 after:bg-black dark:after:bg-transparent"
                        type="button"
                        onClick={() => navigate(absoluteRoutes.new_purse)}
                    >
                        Create New{" "}
                    </button>
                </div>
                <div className="flex w-full mt-8 border-b-2 dark:border-b-white border-b-dark-1">
                    <button
                        className={clsx({
                            "flex items-center cursor-pointer mr-4 md:mr-12": true,
                            "border-b-4 dark:border-b-white border-b-dark-1":
                                tab === TABS.OWNED,
                        })}
                        onClick={() => setSearchParams({ tab: TABS.OWNED })}
                    >
                        <IoWalletOutline className="mr-2 text-2xl text-dark-1 dark:text-light-1 md:text-3xl" />
                        <span className="text-base font-medium Poppins dark:text-white-1 text-dark-1">
                            My Purses
                        </span>
                    </button>
                    <button
                        className={clsx({
                            "flex items-center cursor-pointer": true,
                            "border-b-4 dark:border-b-white border-b-dark-1":
                                tab !== TABS.OWNED,
                        })}
                        onClick={() => setSearchParams({ tab: TABS.ALL })}
                    >
                        <MdOutlineExplore className="mr-2 text-2xl text-dark-1 dark:text-light-1 md:text-3xl" />
                        <span className="text-base font-medium Poppins dark:text-white-1 text-dark-1">
                            Explore Purses
                        </span>
                    </button>
                </div>
                <div className="pb-8 mt-8 mb-20 overflow-y-auto h-screen-fit-70 sm:mb-0">
                    <PurseList
                        loading={loading}
                        purseList={
                            tab === TABS.OWNED ? ownedPurses : purses
                        }
                        isMyPurses={tab === TABS.OWNED}
                        gotToExplorePursesTab={() =>
                            setSearchParams({ tab: TABS.ALL })
                        }
                        gotToCreateNewPurse={() =>
                            navigate(absoluteRoutes.new_purse)
                        }
                    />
                </div>
            </section>
        </main>
    );
};

export default Purses;
