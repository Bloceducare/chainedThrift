import React from "react";
import { innerNav } from "../../static/data";
import Navbar from "../../components/appHeader";

const Swap = () => {
  const [settingsModal, setSettingsModal] = React.useState(false);
  const [showSwap, setShowSwap] = React.useState(true);
  return (
    <section className="bg-overlay-img bg-dark-1 h-screen flex justify-center">
      <div className="container">
        <Navbar data={innerNav} />
        {showSwap && (
          <div className="justify-center items-center backdrop-blur-sm shadow-lg flex lg:mt-16">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              <div className="border-0 rounded-lg bg-dark-4 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex justify-center py-12 pb-2 px-4 rounded-t">
                  <h3 className="Poppins text-base font-semibold text-white-1">
                    Swap
                  </h3>
                </div>
                <div className="flex flex-row-reverse pr-8 -mt-4">
                  <img
                    src="/assets/overView.svg"
                    alt="settings"
                    className="w-6 cursor-pointer"
                    onClick={() => {
                      setSettingsModal(true);
                      setShowSwap(false);
                    }}
                  />
                </div>
                <div className="pl-4 pr-8 pt-4 pb-12">
                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Swap from
                      </p>
                      <input placeholder="0" />
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Balance: -
                      </p>
                    </div>
                    <div>
                      <img src="" alt="coin" className="img-responsive" />
                      <select></select>
                    </div>
                  </div>
                  <div>
                    <img alt="icon" />
                  </div>
                  <div className="flex justify-between pt-4">
                    <div>
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Swap from
                      </p>
                      <input placeholder="0" />
                      <p className="Poppins text-white-1 font-thin text-sm">
                        Balance: -
                      </p>
                    </div>
                    <div>
                      <img src="" alt="coin" className="img-responsive" />
                      <select></select>
                    </div>
                  </div>
                  <button className="py-3 px-6 w-full text-sm text-white-1 bg-gray-2 rounded-3xl w-100">
                    Enter an Amount
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Transaction Settings Modal */}
      {settingsModal ? (
        <>
          <div className="justify-center items-center shadow-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              {/*content*/}
              <div className="border-0 rounded-lg bg-dark-4 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-5 pb-2 px-4 rounded-t">
                  <h3 className="Poppins text-base font-semibold text-white-1">
                    Transaction Settings
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white-1 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setSettingsModal(false);
                      setShowSwap(true);
                    }}
                  >
                    <span className="text-white-1 opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="pl-4 pr-8 pt-4 pb-12">
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
                        className="img-responsive"
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
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default Swap;
