import React,{useState} from "react";
import Notification from "./Notification";
import {FiBell} from 'react-icons/fi';

const Navbar = ({ data }) => {
  const [show, setShow] = useState(false)
  const showHandler = () =>{
      setShow(!show)
  }
  return (
    <div className="bg-dark-1 w-full h-40 pl-8 pr-8 flex justify-between items-center">
      <div className="flex flex-col">
        <div>
          <p className="Montserrat font-extrabold text-3xl text-white-1">Dashboard</p>
          <div className="Poppins font-medium text-white-1">Purse ID: 0xBBB6...e96e</div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div>
          <div className="Poppins text-white-1 font-medium">Bal. of BentoBox: 0.0 DAI</div>
        </div>
      </div>
      <div className="relative ">
      <div onClick={showHandler} className="flex cursor-pointer  relative items-center bg-pink-gradient rounded-3xl p-1">
        <FiBell  className="w-8  text-white" />
        <p className="Poppins text-white-1 text-xs font-thin">15</p>
      </div>
     {show &&  <Notification/>}
      </div>
    </div>
  );
};

export default Navbar;
