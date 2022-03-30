import React,{useEffect} from "react";
import { FiTwitter, FiFacebook, FiLinkedin, FiSlack } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { footerLinks } from "../../static/data";
import { MdOutlineEmail } from "react-icons/md";
import Switch from "../switch/Switch";
import { BsPencilSquare } from "react-icons/bs";
import {Link, useNavigate} from 'react-router-dom';
import Button from "../buttons/button";

const Footer = () => {
  useEffect(() =>{
   window.scroll(0,0)
  })
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-8 p-6 lg:p-8">
      <div className="container mx-auto lg:flex lg:justify-between items-center">
        <div className=" md:w-full lg:w-3/6">
          <Button className="mb-6">Launch App</Button>
          <h3 className="block uppercase mb-4 font-Inter font-extrabold text-gray-9">
            Follow us
          </h3>
          <div className="flex mb-6">
            <a className="mr-12 cursor-pointer" href="#">
              <FiFacebook className="text-purple-2 hover:text-yellow-dark text-lg lg:text-2xl" />
            </a>
            <a className="mr-12 cursor-pointer" href="#">
              <FiLinkedin className="text-purple-2 hover:text-yellow-dark text-lg lg:text-2xl" />
            </a>
            <a className="mr-12 cursor-pointer" href="#">
              <FiSlack className="text-purple-2 hover:text-yellow-dark text-lg lg:text-2xl" />
            </a>
            <a className="mr-12 cursor-pointer" href="#">
              <FiTwitter className="text-purple-2 hover:text-yellow-dark text-lg lg:text-2xl" />
            </a>
          </div>
          <h3 className="block uppercase mb-6 font-Inter font-extrabold text-gray-9">
            Information
          </h3>
          <ul className="grid mb-8 gap-2 grid-cols-2">
            {footerLinks.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className="font-Poppins text-white-1 text-base hover:underline hover:text-yellow-dark font-normal"
                    to = {item.link}
                  >
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Switch />
        </div>
        <div className="md:w-full lg:w-3/6 mt-32">
          <div className="mb-8">
            <h3 className="block font-Inter font-extrabold text-gray-9">REACH OUT TO US</h3>
            <a className="text-purple-2 text-xl md:text-3xl font-extrabold">hello@chainedthrift.com</a>
          </div>
          <p className="font-Poppins text-white-1 text-base font-normal">
            Subscribe to our newsletter and be the first to know about
            our updates
          </p>
          <form className="mt-4 w-full">
            <div className = "w-full grid gap-2 grid-cols-2 items-baseline mb-2">
              <label className="relative w-full" htmlFor="name">
                <input
                  type="text"
                  placeholder="Your name"
                  className="text-white-1 placeholder-gray-11 bg-gray-6 w-full p-4 lg:pr-12 outline-none rounded-lg"
                />
                <BiUser className="text-gray-9 text-xl bottom-4 absolute right-4" />
              </label>
              <label className="relative w-full" htmlFor="email">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="text-white-1 placeholder-gray-11 bg-gray-6 w-full p-4 lg:pr-12 outline-none rounded-lg"
                />
                <MdOutlineEmail className="text-gray-9 text-xl bottom-4 absolute right-4"/>
              </label>
            </div>
            <div className="w-full grid gap-2 grid-cols-4 auto-rows-auto">
              <label className="col-span-3 relative w-full m-0 p-0" htmlFor="email">
                <textarea 
                  placeholder="Leave your messages" 
                  className="mr-4 w-full h-full resize-none pr-12 py-4 text-white-1 placeholder-gray-11 bg-gray-6 px-1 rounded-lg outline-none"
                >
                </textarea>
                  <BsPencilSquare className="text-gray-9 text-xl top-4 absolute right-4" />
              </label>

              <button
                type="submit"
                className="text-white w-full bg-purple-1 rounded-lg h-12 mt-auto"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="text-white-1 mt-6" />
      <p className="text-center text-white-1 text-xs md:text-sm lg:text-xl font-bold font-Poppins mt-6">
        ChainedThrift is a product of Web3Bridge. &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
