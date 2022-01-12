import React from 'react'
import Button from '../../components/buttons/Button';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { IoLogoSlack } from 'react-icons/io';
import {BiUser} from 'react-icons/bi';
import { footer } from '../../data/data';
import {MdOutlineEmail} from 'react-icons/md';
import Switch from '../../components/switch/Switch';
import {BsPencilSquare} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className="bg-blue-gradient-2 p-20">
            <div className="flex items-center">
                <div className="w-3/6">
                    <Button className="mb-6">Launch App</Button>
                    <span className="block uppercase mb-4 font-Inter font-extrabold text-white-1">Follow us</span>
                    <div className="flex mb-6">
                        <span className="mr-12 text-dark-6"><a href="!#"><FaLinkedinIn /></a></span>
                        <span className="mr-12 text-dark-6"><a href="!#"><IoLogoSlack /></a></span>
                        <span className="mr-12 text-dark-6"><a href="!#"><FiTwitter /></a></span>
                    </div>
                    <span className="block uppercase mb-6 font-Inter font-extrabold text-white-1">Information</span>
                    <ul className="grid mb-8 gap-4 grid-cols-3">
                        {
                            footer.map((item, index) => {
                                return (
                                    <li key={index}><a className="font-Inter text-gray-9  hover:underline hover:text-yellow-dark font-normal" href={item.link}>{item.value}</a></li>
                                )
                            })
                        }

                    </ul>
                    <Switch />
                </div>
                <div className="w-3/6 mt-32">
                    <h4 className="font-Inter font-bold text-2xl"><span className="text-white">hello</span> <span className="text-purple-1">@chainedthrift.com</span></h4>
                    <small className="font-Poppins text-white font-normal">Subscribe to our newsletter and be the first to know <br /> about our updates</small>
                    <form className="mt-4">
                        <h6 className="font-Inter font-extrabold text-white">keep in touch</h6>
                        <div className="flex  items-center mb-8">
                            <label className="relative" htmlFor="name">
                                <input type="text" placeholder="Your name" className="mr-4 p-1 text-white-1  placeholder-gray-9 bg-dark-1  pr-6 outline-none rounded-lg" />
                                <div className="text-gray-9 absolute right-6 bottom-2"><BiUser/></div>
                            </label>
                            <label className="relative" htmlFor="email">
                                <input type="text" placeholder="E-mail" className="mr-4 p-1  text-white-1 placeholder-gray-9  pr-6 bg-dark-1 outline-none rounded-lg" />
                                <div className="text-gray-9 absolute right-6 bottom-2"><MdOutlineEmail/></div>
                            </label>
                        </div>
                        <div className="flex items-center">
                            <label className="relative" htmlFor="email">
                                <textarea type="email" placeholder="Leave your messages"  className="mr-4 resize-none pr-32 py-1 text-white-1 placeholder-white bg-dark-1  px-1 rounded-lg outline-none"/>
                                <div className="text-yellow-dark absolute right-6 bottom-10"><BsPencilSquare/></div>
                            </label>

                            <button type="submit" className="text-white bg-purple-1 mb-1 px-6 py-3 rounded-lg">Send</button>
                        </div>

                    </form>
                </div>
            </div>
            <hr className="text-white-1 mt-6"/>
            <p className="text-center text-white-1 font-bold font-Poppins mt-6">ChainedThrift is a sample project for Web3Bridge. © 2021 All rights reserved.</p>
        </footer>
    )
}

export default Footer
