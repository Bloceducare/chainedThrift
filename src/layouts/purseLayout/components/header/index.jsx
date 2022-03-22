import React,{useState} from "react";
import Notification from "./Notification";
import {FiBell} from 'react-icons/fi';

const Navbar = ({ theme }) => {
  const [show, setShow] = useState(false)
  const showHandler = () =>{
      setShow(!show)
  }
  return (
    <div className={` ${theme === 'dark'?'bg-dark-1' : 'bg-white-1'} w-full h-40 pl-8 pr-8 flex justify-between items-center`}>
      <div className="flex flex-col">
        <div>
          <p className={`Montserrat font-extrabold text-lg md:text-3xl ${theme === 'dark'? 'text-white-1':'text-dark-1'}`}>Dashboard</p>
          <div className={`Poppins font-medium text-xs md:text-base ${theme === 'dark'? 'text-white-1':'text-dark-1'}`}>Purse ID: 0xBBB6...e96e</div>
        </div>
      </div>
      <div className="flex flex-col mt-7 md:mr-0">
        <div>
          <div className={`Poppins text-xs md:text-base ${theme === 'dark'? 'text-white-1':'text-dark-1'} font-medium`}>Bal. of BentoBox: 0.0 DAI</div>
        </div>
      </div>
      <div className="relative hidden md:block mt-7">
        <div onClick={showHandler} className="">
          <div className="flex cursor-pointer relative items-center bg-pink-gradient rounded-3xl p-1">
            <FiBell  className="w-8  text-white" />
            <p className="Poppins text-white-1 text-xs font-thin">15</p>
          </div>
        </div>
        {show &&  <Notification/>}
      </div>
    </div>
  );
};

export default Navbar;
