import React from "react";
import { tokenData } from "../../static/data";
import { IoIosArrowDown } from 'react-icons/io';
import Modal from "../../common/modal/modal";
import {BsQuestionCircle} from 'react-icons/bs';
import Switch from '../../common/switch/Switch'


const Swap = ({theme}) => {
  const [settingsModal, setSettingsModal] = React.useState(false);
  const [showSwap, setShowSwap] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [active, setActive] = React.useState('a');

  const activeHandlerA = () =>{
    setActive('a')
  }
  const activeHandlerB = () =>{
    setActive('b')
  }
  const activeHandlerC = () =>{
    setActive('c')
  }


  const showHandler = () => {
    setShow(show => !show)
  }
  return (
    <section className={` ${theme === 'dark'? 'bg-overlay-img' : 'bg-overlay-img-light'} ${theme === 'dark' ?  `bg-dark-1` : `bg-light-1` } h-screen flex justify-center`}>
      <div className="container">
        {/* <Navbar data={innerNav} /> */}
        {showSwap && (
          <div className="justify-center items-center backdrop-blur-sm  flex lg:mt-16">
            <div className="relative px-4 w-full max-w-md h-full md:h-auto">
              <div className={`border-0 rounded-lg ${theme === 'dark'? 'bg-dark-4' : 'bg-blue-7'} shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}>
                <div className="flex justify-center py-12 pb-2 px-4 rounded-t">
                  <h3 className={`Poppins text-base font-semibold ${theme === 'dark'? 'text-white' : 'text-dark'}`}>
                    Swap
                  </h3>
                </div>
                <div className="flex flex-row-reverse pr-8 -mt-4">
                  <img
                    src={` ${theme === 'dark'? '/assets/overView.svg' :  '/assets/settings.svg'}`}
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
                      <p className={`Poppins font-bold ${theme === 'dark'? 'text-white' : 'text-dark'} font-thin text-sm mb-1`}>
                        Swap from
                      </p>
                      <input placeholder="0"  className="w-1/4 border-none outline-none bg-transparent text-center placeholder:font-extrabold placeholder:text-2xl" />
                      <p className={`Poppins ${theme === 'dark'? 'text-white' : 'text-dark'} font-thin text-sm`}>
                        Balance: - <span className="font-semibold">70.42</span>
                      </p>
                    </div>
                    <div className="flex items-center">
                      <img src="/assets/image.svg" alt="coin" className="img-responsive" />
                      <div onClick={() => setShow(!show)} className="flex items-center">
                        <button className={`ml-2 mr-2 ${theme === 'dark'? 'text-white' : 'text-dark'}`}>ETH </button>
                        <IoIosArrowDown className="text-white cursor-pointer" size={20} />
                      </div>
                      {
                        show && (

                          <Modal onClose={showHandler}>
                            <div className="bg-dark-3  rounded-2xl p-2 h-98 md:h-96 lg:h-98 w-full  md:w-1/4 mx-auto  lg:w-1/4">
                              <div className="flex justify-between p-2">
                                <h5>Select Token</h5>
                                <button onClick={showHandler}>X</button>
                              </div>
                              <div>
                                <label htmlFor="search"></label>
                                <input type="text" className="w-full p-1 rounded-lg outline-none outline-offset-2 outline-1" placeholder="search for token" />
                              </div>
                              <ul>
                                {
                                  tokenData.map((item, i) => {
                                    return (
                                      <li key={i} className="flex items-center mb-2" ><img className="img-responsive w-4" src={item.icon} alt="token" /> <p className="ml-1">{item.abv}</p></li>
                                    )
                                  })
                                }
                              </ul>

                            </div>
                          </Modal>


                        )
                      }
                    </div>
                  </div>
                  <div className="relative mb-10 mt-10">
                    <hr className="" />
                    <div className="flex absolute mr-2 -top-10 text-align-left right-0 w-100  bg-slate-500 p-2 rounded-full justify-end mt-6 mb-6 border-t-black">
                      <img className="img-responsive" src="/assets/Group.svg" alt="icon" />
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 mb-4">
                    <div>
                      <p className={`Poppins ${theme === 'dark'? 'text-white': 'text-dark'} font-thin text-sm mb-2`}>
                        Swap from
                      </p>
                      <input placeholder="0" className="w-1/4 border-none outline-none bg-transparent text-center placeholder:font-extrabold placeholder:text-2xl" />
                      <p className={`Poppins ${theme === 'dark'? 'text-white': 'text-dark'} font-thin text-sm`}>
                        Balance: - <span className="font-semibold"></span>
                      </p>
                    </div>
                    <div>
                      {/* <img src="" alt="" />
                      <select></select> */}
                      <button className="border-purple-1 p-2 pl-4 pr-4 bg-purple-1 text-white-1 cursor-pointer mt-4 font-Poppins font-bold text-sm  outline-none outline-offset-2 outline-1 flex items-center rounded-full">Select a token <IoIosArrowDown className="ml-2" /></button>
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
              <div className={`border-0 rounded-lg ${theme === 'dark'? 'bg-dark-4' : 'bg-blue-7'} shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}>
                {/*header*/}
                <div className="flex items-center justify-between pt-5 pb-2 px-4 rounded-t">
                  <h3 className={`Poppins text-base font-semibold ${theme === 'dark'? 'text-white-1' :'text-dark-1'}`}>
                    Transaction Settings
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-white-1 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setSettingsModal(false);
                      setShowSwap(true);
                    }}
                  >
                    <span className={`${theme === 'dark'? 'text-white-1' : 'text-dark-1'} opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none`}>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="pl-4 pr-8 pt-4 pb-12">
                  <div className="flex items-center">
                  <h5 className={`${theme === 'dark'? 'text-white-1' :'text-dark-1'} mr-2 font-Poppins font-normal`}>Slippage Tolerance</h5>
                  <p className={`${theme === 'dark'? 'text-white-1' : 'text-dark-1'}`}><BsQuestionCircle/></p>
                  </div>
                  <div className="flex items-center mt-4">
                    <button onClick={activeHandlerA} className={`font-semibold outline-none focus:outline-none ${active === 'a' ? 'bg-purple-1' : ''} mr-5 text-white p-1 rounded-full pl-2 pr-2`}>0.1%</button>
                    <button onClick={activeHandlerB} className={`font-semibold outline-none focus:outline-none ${active ==='b' ? 'bg-purple-1' : ''} mr-5 text-white p-1 rounded-full pl-2 pr-2`}>0.5%</button>
                    <button onClick={activeHandlerC} className={`font-semibold outline-none focus:outline-none ${active === 'c' ? 'bg-purple-1' : ''} mr-5 text-white p-1 rounded-full pl-2 pr-2`}>1.0%</button>
                   <div className="">
                    <input className="w-24 border-0 outline-none rounded-lg pl-1 pr-1" type="num" placeholder="0.5%" />
                   </div>
                  </div>
                  {
                    active === 'a'? (
                      <div>
                      <p className={`mt-4 ${theme === 'dark'? 'text-white-1' :'text-dark-1'} font-Poppins font-normal`}>Transaction deadlines</p>
                      <div className="flex mb-4 mt-4">
                      <input type="num" className="w-24 mr-2 border-0 outline-none rounded-lg pl-1 pr-1" placeholder="0.5%" />
                      <p className={`${theme === 'dark'? 'text-white-1' :'text-dark-1'} font-Poppins font-normal`}>Minutes</p>
                      </div>
                        <p className={`${theme === 'dark'? 'text-white-1' :'text-dark-1'} mt-2 mb-2 font-Poppins text-xl font-bold`}>Interface Settings</p>
                       <div className="flex items-center justify-between mb-6">
                         <p className={`flex items-center ${theme === 'dark'? 'text-white-1' :'text-dark-1'}`}>Total deadline <span><BsQuestionCircle/></span></p>
                         <Switch/>
                       </div>
                       <div className="flex items-center justify-between">
                         <p className={`flex items-center ${theme === 'dark'? 'text-white-1' :'text-dark-1'}`}>Disable multiples <span><BsQuestionCircle/></span></p>
                         <Switch/>
                       </div>
                     </div>
                    ) : active === 'b' ? <h2 className="text-white text-xl">Hello</h2> : active === 'c'? <h1 className="text-white text-xl">Welcome</h1> : null
                  }
                  {/* <div>
                   <p className="mt-4 text-white font-Poppins font-normal">Transaction deadlines</p>
                   <div className="flex mb-4 mt-4">
                   <input type="num" className="w-24 mr-2 border-0 outline-none rounded-lg pl-1 pr-1" placeholder="0.5%" />
                   <p className="text-white font-Poppins font-normal">Minutes</p>
                   </div>
                     <p className="text-white mt-2 mb-2 font-Poppins text-xl font-bold">Interface Settings</p>
                    <div className="flex items-center justify-between mb-6">
                      <p className="flex items-center text-white">Total deadline <span><BsQuestionCircle/></span></p>
                      <Switch/>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="flex items-center text-white">Disable multiples <span><BsQuestionCircle/></span></p>
                      <Switch/>
                    </div>
                  </div> */}
                  {/* <div className="flex justify-between pt-4">
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
                  </div> */}
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
