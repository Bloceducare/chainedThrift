import React, { useState, useEffect } from "react";
import { purseData } from "../../static/data";
import PurseList from "./components/purseList";
import clsx from "clsx";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import {absoluteRoutes} from '../../utils'
import { useNavigate } from "react-router-dom";

const Purses = () => {
  const navigate = useNavigate();
  const tabs = {
    MY_PURSES: "myPurses",
    MEXPLORE_PURSES: "explorePurses"
  }
  const [category, setCategory] = useState(tabs.MY_PURSES);

  useEffect(() => {}, [category]);
  return (
    <main className="bg-overlay-img-light dark:bg-overlay-img bg-cover min-h-screen">
      <section className="container mx-auto px-4 sm:px-6 md:px-0">
        <div className="flex justify-between mt-4 md:mt-12">
          <h1 className="font-Montserrat leading-tight font-bold lg:text-3xl md:text-lg dark:text-white-1 text-dark-1">
            Thrift Purses
          </h1>
          <button
            className="border-purple-1 text-purple-1 cursor-pointer outline outline-offset-2 outline-1 rounded-lg px-6 py-1 after:content-['+'] after:px-2 after:py-1 after:rounded-full after:text-white-1 after:bg-black dark:after:bg-transparent"
            type="button"
            onClick={() => navigate(absoluteRoutes.new_purse)}
          >
            Create New {" "}
          </button>
        </div>
        <div className="flex w-full mt-8 border-b-2 dark:border-b-white border-b-dark-1">
          <button
            className={clsx({
              "flex items-center cursor-pointer mr-4 md:mr-12": true,
              "border-b-4 dark:border-b-white border-b-dark-1":
                category === "myPurses",
              "md:mr-12": category !== "myPurses",
            })}
            onClick={() => setCategory("myPurses")}
          >
            <IoWalletOutline className="text-dark-1 dark:text-light-1 text-2xl md:text-3xl mr-2" />
            <span className="Poppins font-medium text-base dark:text-white-1 text-dark-1">
              My Purses
            </span>
          </button>
          <button
            className={clsx({
              "flex items-center cursor-pointer": true,
              "border-b-4 dark:border-b-white border-b-dark-1":
                category === "explorePurses",
            })}
            onClick={() => setCategory("explorePurses")}
          >
            <MdOutlineExplore className="text-dark-1 dark:text-light-1 text-2xl md:text-3xl mr-2" />
            <span className="Poppins font-medium text-base dark:text-white-1 text-dark-1">
              Expolore Purses
            </span>
          </button>
        </div>
        <div className="mt-8 pb-8">
          <PurseList 
            purseList={category === "myPurses" ? purseData.myPurses : purseData.allPurses}
            isMyPurses = {category === "myPurses"}
          />
        </div>
      </section>
    </main>
  );
};

export default Purses;
