import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { purseData } from "../../static/data";
import PurseList from "../../layouts/purseLayout/components/purseList";
import NoPurse from "./components/noPurse";

const Purses = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("noPurse");
  const [createPurseModal, setCreatePurseModal] = React.useState(false);
  const [purseDetailModal, setPurseDetailModal] = React.useState(false);
  // const [selectedPurse, setSelectPurse] = useState(null);
  const handleClick = (purseId) => {
    // console.log(purseId);
    // console.log("clicked....");
    // setSelectPurse(purseId);
    setPurseDetailModal(true);
  };
  useEffect(() => {}, [category]);
  return (
    <section className="bg-overlay-img bg-dark-1 flex justify-center h-screen pb-8">
      <div className="container">
        <section className="bg-dark-1 pl-4 md:pl-8 pr-4 md:pr-12 mt-12">
          <div className="flex justify-between pt-4 md:pt-12">
            <p className="font-Montserrat leading-tight font-bold lg:text-3xl md:text-lg text-white-1">
              Thrift Purses
            </p>
            <button
              className="border-purple-1 text-purple-1 cursor-pointer outline outline-offset-2 outline-1 rounded-lg px-6 py-1"
              type="button"
              onClick={() => setCreatePurseModal(true)}
            >
              Create New +
            </button>
          </div>
          <div className="flex w-full mt-6 border-b-2 border-b-white">
            <div className="flex">
              <div
                className={
                  category === "myPurses"
                    ? "flex items-center border-b-4 border-b-white cursor-pointer lg:mr-12"
                    : "flex items-center cursor-pointer md:mr-12"
                }
                onClick={() => setCategory("myPurses")}
              >
                <img
                  src="/assets/purse.svg"
                  alt="coin"
                  className="img-responsive"
                />
                <p className="Poppins font-medium text-base text-white-1">
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
                <p className="Poppins font-medium text-base text-white-1">
                  Expolore Purses
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 pb-8">
            {category === "myPurses" && (
              <PurseList list={purseData.myPurses} onAction={handleClick} />
            )}
            {category === "explorePurses" && (
              <PurseList
                list={purseData.explorePurses}
                onAction={handleClick}
              />
            )}
            {category === "noPurse" && (
              <NoPurse
                openCreatePurse={setCreatePurseModal}
                openJoinPurse={setPurseDetailModal}
              />
            )}
          </div>
        </section>
      </div>
      {/* <!-- Create Purse Modal --> */}
      {createPurseModal ? (
        <>
          <div className="justify-center items-center backdrop-blur-sm shadow-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              {/*content*/}
              <div className="border-0 rounded-lg bg-dark-4 shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-5 px-4 rounded-t">
                  <h3 className="text-base font-semibold text-white-1">
                    Create a Purse
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white-1 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setCreatePurseModal(false)}
                  >
                    <span className="text-white-1 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form className="px-2 pb-4 space-y-1 lg:px-4" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Amount in DAI
                    </label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="border border-gray-7 bg-dark-4 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="members"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Number of Members
                    </label>
                    <input
                      type="text"
                      name="members"
                      id="members"
                      placeholder="2"
                      className="bg-dark-4 border border-gray-300 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="frequency"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Frequency (In Days)
                    </label>
                    <input
                      type="text"
                      name="members"
                      id="members"
                      placeholder="2"
                      className="bg-dark-4 border border-gray-300 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="members"
                      className="block mb-2 text-sm font-thin text-white-1"
                    >
                      Number of Members
                    </label>
                    <input
                      type="text"
                      name="members"
                      id="members"
                      placeholder="2"
                      className="bg-dark-4 border border-gray-300 text-sm text-white-1 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <p className="text-white-1 text-sm font-thin">
                    Total Amount: 0 DAI
                  </p>
                  {/*footer*/}
                  <button className="py-3 px-6 w-full text-sm text-white-1 bg-gray-2 rounded-3xl w-100">
                    Create Purse
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/* <!-- Purse Detail Modal --> */}
      {purseDetailModal ? (
        <>
          <div className="justify-center items-center backdrop-blur-sm shadow-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              {/*content*/}
              <div className="border-0 rounded-lg bg-dark-4 shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-5 pb-2 px-4 rounded-t">
                  <h3 className="Poppins text-base font-semibold text-white-1">
                    Account
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white-1 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setPurseDetailModal(false)}
                  >
                    <span className="text-white-1 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="pl-4 pr-8 pt-4 pb-12">
                  <p className="Poppins text-white-1 text-xl font-extrabold">
                    0xBBB6...e96e
                  </p>
                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Created
                      </p>
                      <p className="Poppins text-white-1 font-bold">
                        23 Sep. 2021
                      </p>
                    </div>
                    <div>
                      <img
                        src="/assets/lock.svg"
                        alt="coin"
                        className="img-responsive rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Frequency
                      </p>
                      <p className="text-white-1 font-bold">5 Days</p>
                    </div>
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Amount(TVL)
                      </p>
                      <p className="text-white-1 font-bold">1000 USDC</p>
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Current Members
                      </p>
                      <p className="text-white-1 font-bold">2</p>
                    </div>
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Max Members
                      </p>
                      <p className="text-white-1 font-bold">2</p>
                    </div>
                  </div>
                  <div className="flex pt-4">
                    <div>
                      <p className="Poppins text-white-1 font-bold">Note:</p>
                    </div>
                    <div className="ml-2">
                      <p className="text-white-1 font-thin text-sm">
                        You are to deposit a collateral of 10.0 DAI which will
                        be put in yield farming. You can withdraw this
                        collateral plus the yield to your wallet immediately
                        after everyone have gotten their funds from the purse
                      </p>
                      <p className="text-white-1 font-thin text-sm pt-4">
                        By clicking the "JOIN PURSE" button, you are sending
                        10.0 DAI as collateral and 10.0 DAI for the purse amount
                        which makes it total of 20 DAI
                      </p>
                      <div
                        className="flex flex-row-reverse pt-4"
                        onClick={() => navigate("/app/purse/1234")}
                      >
                        <p className="text-green-1 font-thin text-sm cursor-pointer">
                          This purse is now Open!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
};

export default Purses;
