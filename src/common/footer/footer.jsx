import React, { useEffect,useState, useRef } from "react";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { SiDiscord, SiTelegram } from "react-icons/si";
import { footerLinks } from "../../static/data";
import { MdOutlineEmail } from "react-icons/md";
// import Switch from "../switch/Switch";
// import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
// import Button from "../buttons/button";
import { useToasts } from "react-toast-notifications";
import axios from "axios";

const Footer = () => {
    useEffect(() => {
        window.scroll(0, 0);
    });

    let name = useRef();
    let email = useRef();

    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false)

    const submitNewsLetter = async (event) => {
        event.preventDefault();
        let nameInput = name.current.value;
        let emailInput = email.current.value;

        const url = "https://thrift-newsletter.herokuapp.com/newsletter";
        if (!nameInput || !emailInput) {
            return addToast("missing fields", { appearance: "error" });
        }
        const body = JSON.stringify({
            name: nameInput,
            email: emailInput,
            // message: messageInput,
        });
        setLoading(true)
        try {
            const response = await axios.post(url, body, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });
            event.target.reset();
            if (response.status === 201) {
                setLoading(false)
                return addToast(
                    "You've successfully subscribe to our newsletter",
                    { appearance: "success" }
                );
            } 
        } catch (error) {
          let err = error.response.data.message
          setLoading(false)
          return addToast(err, { appearance: "error" });
        }
    };
    return (
        <footer className="p-6 bg-gray-8 lg:p-8">
            <div className="container items-center mx-auto lg:flex lg:justify-between">
                <div className=" md:w-full lg:w-3/6">
                    {/* <a
                        // href="https://docs.google.com/forms/d/1aNbxba_d3cnIS4gy7aJI2I_TBSNl7XCfIdvRiuDT1qg/viewform?ts=629f27c6&edit_requested=true"
                        href="#"
                        // target="_blank"
                        // rel="noopener noreferrer"
                    >
                        {" "}
                        <Button className="mb-6">Reviews</Button>
                    </a> */}
                    <h3 className="block mb-4 font-extrabold uppercase font-Montserrat text-gray-9">
                        Follow us
                    </h3>
                    <div className="flex mb-6">
                        <a
                            href="https://t.me/web3bridge"
                            target="_blank"
                            className="mr-12 cursor-pointer"
                            rel="noreferrer"
                        >
                            <SiTelegram className="text-lg text-purple-2 hover:text-yellow-dark lg:text-2xl" />
                        </a>
                        <a className="mr-12 cursor-pointer" href="#!">
                            <FiLinkedin className="text-lg text-purple-2 hover:text-yellow-dark lg:text-2xl" />
                        </a>
                        <a
                            className="mr-12 cursor-pointer"
                            href="https://discord.gg/YR4qbYEd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <SiDiscord className="text-lg text-purple-2 hover:text-yellow-dark lg:text-2xl" />
                        </a>
                        <a
                            className="mr-12 cursor-pointer"
                            href="https://twitter.com/Web3Bridge?s=20&t=0F9KvacxND6obg5wUGTScg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiTwitter className="text-lg text-purple-2 hover:text-yellow-dark lg:text-2xl" />
                        </a>
                    </div>
                    <h3 className="block mb-4 mt-12 font-extrabold uppercase font-Montserrat text-gray-9">
                        Information
                    </h3>
                    <ul className="grid mb-8">
                        {footerLinks.map((item, index) => {
                            return (
                                <li key={index} className="mb-2">
                                    <Link
                                        className="text-base font-normal font-Poppins  text-white-1 hover:underline hover:text-yellow-dark"
                                        to={item.link}
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            );
                        })}
                        <a
                            className="text-base font-normal  font-Poppins text-white-1 hover:underline hover:text-yellow-dark"
                            href="https://drive.google.com/file/d/1--v21F3Y6_fZ4BhAYF430BF9VP-Vv9_P/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Terms of Service
                        </a>
                    </ul>
                    {/* <Switch /> */}
                </div>
                <div className="mt-32 md:w-full lg:w-3/6">
                    <div className="mb-8">
                        <h3 className="block font-extrabold font-Inter text-gray-9">
                            REACH OUT TO US
                        </h3>
                        <a
                            className="text-xl font-extrabold text-purple-2 font-Poppins md:text-3xl"
                            href="mailto:hello@chainedthrift.com"
                        >
                            hello@chainedthrift.com
                        </a>
                    </div>
                    <p className="text-base font-normal font-Poppins text-white-1">
                        Subscribe to our newsletter and be the first to know
                        about our updates
                    </p>
                    <form onSubmit={submitNewsLetter} className="w-full mt-4">
                        <div className="grid items-baseline w-full grid-cols-2 gap-2 mb-2">
                            <label className="relative w-full" htmlFor="name">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    ref={name}
                                    className="w-full p-4 rounded-lg outline-none text-white-1 placeholder-gray-11 bg-gray-6 lg:pr-12"
                                />
                                <BiUser className="absolute text-xl text-gray-9 bottom-4 right-4" />
                            </label>
                            <label className="relative w-full" htmlFor="email">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="E-mail"
                                    ref={email}
                                    className="w-full p-4 rounded-lg outline-none text-white-1 placeholder-gray-11 bg-gray-6 lg:pr-12"
                                />
                                <MdOutlineEmail className="absolute text-xl text-gray-9 bottom-4 right-4" />
                            </label>
                        </div>
                        <div className="grid w-full grid-cols-4 gap-2 auto-rows-auto">
                            {/* <label
                                className="relative w-full col-span-3 p-0 m-0"
                                htmlFor="email"
                            >
                                <textarea
                                    placeholder="Leave your messages"
                                    name="message"
                                    ref={message}
                                    className="w-full h-full px-1 py-4 pr-12 mr-4 rounded-lg outline-none resize-none text-white-1 placeholder-gray-11 bg-gray-6"
                                ></textarea>
                                <BsPencilSquare className="absolute text-xl text-gray-9 top-4 right-4" />
                            </label> */}

                            <button
                                type="submit"
                                className={`w-full h-12 mt-auto text-white cursor-pointer ${loading? 'cursor-not-allowed' : ''} rounded-lg bg-purple-1`}
                                disabled={loading}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <hr className="mt-6 text-white-1" />
            <p className="mt-6 text-xs font-bold text-center text-white-1 md:text-sm lg:text-xl font-Poppins">
                ChainedThrift is a product of Web3Bridge. &copy;{" "}
                {new Date().getFullYear()} All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
