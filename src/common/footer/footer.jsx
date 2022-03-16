import React,{useEffect} from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoLogoSlack } from "react-icons/io";
import { BiUser } from "react-icons/bi";
import { footer } from "../../static/data";
import { MdOutlineEmail } from "react-icons/md";
import Switch from "../switch/Switch";
import { BsPencilSquare } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';
import Button from "../buttons/button";

const Footer = () => {
  useEffect(() =>{
   window.scroll(0,0)
  })
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-8 p-6 lg:p-8">
      <div className="lg:flex lg:justify-between items-center">
        <div className=" md:w-full lg:w-3/6">
          <Button className="mb-6">Launch App</Button>
          <span className="block uppercase mb-4 font-Inter font-extrabold text-white-1">
            Follow us
          </span>
          <div className="flex mb-6">
            <span className="mr-12 text-dark-6">
              <div className="cursor-pointer" onClick={()=> navigate('#')}>
                <FaLinkedinIn size={30} />
              </div>
            </span>
            <span className="mr-12 text-dark-6">
              <div onClick={()=> navigate('#')}>
                <IoLogoSlack size={30} />
              </div>
            </span>
            <span className="mr-12 text-dark-6">
              <div onClick={()=> navigate('#')}>
                <FiTwitter size={30} />
              </div>
            </span>
          </div>
          <span className="block uppercase mb-6 font-Inter font-extrabold text-white-1">
            Information
          </span>
          <ul className="grid mb-8 gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {footer.map((item, index) => {
              return (
                <li key={index}>
                  <div
                    className="font-Inter text-gray-9  hover:underline hover:text-yellow-dark font-normal"
                onClick={() => navigate(`${item.link}`)}
                  >
                    {item.value}
                  </div>
                </li>
              );
            })}
          </ul>
          <Switch />
        </div>
        <div className="md:w-full lg:w-3/6 mt-32">
          <h4 className="font-Inter font-bold text-2xl">
            <span className="text-white">hello</span>{" "}
            <span className="text-purple-1">@chainedthrift.com</span>
          </h4>
          <small className="font-Poppins text-white font-normal">
            Subscribe to our newsletter and be the first to know <br /> about
            our updates
          </small>
          <form className="mt-4">
            <h6 className="font-Inter font-extrabold text-white">
              keep in touch
            </h6>
            <div className="lg:flex   items-baseline mb-2">
              <label className="relative md:mr-6 lg:mr-6" htmlFor="name">
                <input
                  type="text"
                  placeholder="Your name"
                  className=" p-1 text-white-1  placeholder-gray-9 bg-dark-1 w-full mb-5 md:w-2/5  lg:w-full pr-8 md:pr-8 lg:pr-12  outline-none rounded-lg"
                />
                <div className="text-gray-9 right-2 bottom-0 absolute md:right-4 md:bottom-1 lg:right-4 lg:bottom-8">
                  <BiUser />
                </div>
              </label>
              <label className="relative" htmlFor="email">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="mr-4 p-1  text-white-1 placeholder-gray-9 w-full md:w-2/5  lg:w-full pr-8 md:pr-8 lg:pr-12 bg-dark-1 outline-none rounded-lg"
                />
                <div className="text-gray-9 right-6 bottom-0 absolute md:right-6 md:bottom-1 lg:right-4 lg:bottom-2">
                  <MdOutlineEmail />
                </div>
              </label>
            </div>
            <div className="lg:items-center md:flex lg:flex ">
              <label className="relative mt-3 md:mr-10 md:w-8/12 lg:mr-8 lg:w-3/5" htmlFor="email">
                <textarea
                  type="email"
                  placeholder="Leave your messages"
                  className="mr-4 w-full resize-none pr-12 md:pr-12 lg:pr-12 py-1 text-white-1 placeholder-white bg-dark-1  px-1 rounded-lg outline-none"
                />
                <div className="text-yellow-dark absolute hidden bottom-20 md:right-6 md:bottom-10 lg:right-6 lg:bottom-10">
                  <BsPencilSquare />
                </div>
              </label>

              <button
                type="submit"
                className="text-white w-full md:w-24 lg:w-24 bg-purple-1 mb-1 mt-3 px-6 py-3 rounded-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="text-white-1 mt-6" />
      <p className="text-center text-white-1 text-xs md:text-sm lg:text-xl font-bold font-Poppins mt-6">
        ChainedThrift is a sample project for Web3Bridge. © 2021 All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
