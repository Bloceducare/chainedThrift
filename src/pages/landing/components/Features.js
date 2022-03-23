import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Features({theme}) {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className={`dark:bg-dark-1 bg-light-1'}  p-6  md:p-12 lg:flex lg:justify-between lg:mt-12 lg:p-24`}>
                <div className="lg:w-3/6 mb-24 lg:mr-24">
                    <div className={`${theme === 'dark'? '' : 'shadow-box'} bg-white w-full rounded-lg p-8`}>
                        <h5 className={`text-dark-1 font-extrabold font-Poppins`}>
                            Safe and open source
                        </h5>
                        <img
                            className="block mx-auto"
                            src="/assets/home.svg"
                            alt="home-svg"
                        />
                        <p className="text-dark-1 font-Montserrat font-light">
                            Fully transparent and secure purses. Our purse is
                            <b> open source</b> and trusted by all.
                        </p>
                    </div>
                </div>
                <div className="lg:w-3/6 lg:flex lg:justify-center">
                    <div>
            <p className={`${theme === 'dark'? 'text-white-1': 'text-dark-1'} font-Poppins mb-12 font-bold`}>
                            What we do to help
                            <br />
                            our users.
                        </p>
                        <div className={`bg-white ${theme === 'dark'? '' : 'shadow-box'}  rounded-lg mb-36 lg:mr-11 p-8`}>
                            <img
                                className="block mx-auto"
                                src="/assets/customer.svg"
                                alt="customer-svg"
                            />
                            <h5 className="text-dark-1 font-extrabold font-Poppins mt-6">
                                Stake
                            </h5>
                            <p className="text-dark-1 font-Montserrat font-light">
                                We offer stake function for user to stake and earn rewards on
                                thier savings.
                            </p>
                            <p className="flex items-center mt-4 text-purple-400">
                                <span className="mr-4 font-semibold font-Monserat">
                                    <button className="cursor-pointer" onClick={() => navigate('#')}> Coming soon ......</button>
                                </span>
                                <span>
                                    <BsArrowRightShort />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className={`bg-white ${theme === 'dark'? '' : 'shadow-box'} rounded-lg mb-48 -translate-y-16 p-6`}>
                        <img
                            className="block mx-auto  -translate-y-12"
                            src="/assets/chat.svg"
                            alt="chat-svg"
                        />
                        <h5 className="text-dark-1 font-extrabold font-Poppins">Swap</h5>
                        <p className="text-dark-1 font-Montserrat font-light">
                            Easily swap Ethereum and other Erc-20 tokens{" "}
                        </p>
                        <p className="flex items-center mt-4 text-purple-400">
                            <span className="font-semibold font-Monserat">
                                <button className="cursor-pointer" onClick={() => navigate('#')}> Learn more ......</button>
                            </span>
                            <span>
                                <BsArrowRightShort />
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Features