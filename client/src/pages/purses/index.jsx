import React, { useState, useEffect } from "react";
import { innerNav } from "../../static/data";
import Navbar from "../../layout/purseLayout/components/header";
import HeaderButton from "../../components/buttons/HeaderButton";
import { purseData } from "../../static/data";
import Purse from "../../components/purse";

const Purses = () => {
  const [category, setCategory] = useState("myPurses");

  useEffect(() => {}, [category]);
  return (
    <section className="bg-overlay-img bg-dark-1 h-screen flex justify-center">
      <div className="container">
        <Navbar data={innerNav} />
        <section className="bg-dark-1 px-8 mt-12">
          <div className="flex justify-between pt-12">
            <p className="font-Montserrat leading-tight font-bold lg:text-3xl md:text-lg text-white-1">
              Thrift Purses
            </p>
            <HeaderButton>Create New +</HeaderButton>
          </div>
          <div className="flex w-full mt-6 border-b-2 border-b-white">
            <div className="flex">
              <div
                className={
                  category === "myPurses"
                    ? "flex items-center border-b-4 border-b-white cursor-pointer lg:mr-12"
                    : "flex items-center cursor-pointer lg:mr-12"
                }
                onClick={() => setCategory("myPurses")}
              >
                <img
                  src="/assets/purse.svg"
                  alt="coin"
                  className="img-responsive"
                />
                <p className="font-Montserrat text-base text-white-1">
                  My Purses
                </p>
              </div>
              <div
                className={
                  category === "explorePurses"
                    ? "flex lg:w-64 items-center cursor-pointer lg:ml-12 border-b-4 border-b-white"
                    : "flex lg:w-64 items-center cursor-pointer lg:ml-12"
                }
                onClick={() => setCategory("explorePurses")}
              >
                <img src="/assets/explore.svg" alt="coin" className="w-8 h-8" />
                <p className="font-Montserrat text-base text-white-1">
                  Expolore Purses
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            {category === "myPurses" && <PurseList list={purseData.myPurses} />}
            {category === "explorePurses" && (
              <PurseList list={purseData.explorePurses} />
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export const PurseList = ({ list = [] }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {list.map((item, idx) => (
        <Purse
          key={idx}
          created={item.created}
          member={item.member}
          tvl={item.tvl}
        />
      ))}
    </div>
  );
};

export default Purses;
