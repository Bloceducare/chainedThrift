import React from 'react';
import { landingNav } from '../../data/data';
import Header from '../../layout/header/index';
import coin from '../../assets/coin.svg';
import Button from '../../components/buttons/Button';
import metamask from '../../assets/metamask.svg';
import wallet from '../../assets/Wallet.svg';
import money from '../../assets/Money.svg';
import home from '../../assets/home.svg'
import chat from '../../assets/chat.svg'
import customer from '../../assets/customer.svg';
import { BsArrowRightShort } from 'react-icons/bs'

const Landing = () => {
    return (
        <section>
            <div className="bg-overlay-img bg-dark-1 bg-unset bg-contain bg-no-repeat h-auto">
                <Header data={landingNav} />
                <div className="flex items-center p-16">
                    <div className="">
                        <h2 className="font-Montserrat leading-tight font-extrabold text-6xl mb-4 text-white-1">Here it is, your truly
                            Decentralised Thrift</h2>
                        <p className="text-white-1  break-words font-Poppins font-bold text-2xl">Create or join already created purses to quickly<br />
                            and easily meet your financial target.</p>
                        <a href="!#"><Button>Launch App</Button></a>
                    </div>
                    <div className="-translate-x-3/4">
                        <div>
                            <img src={coin} alt="coin" />
                        </div>
                    </div>
                </div>
                {/* HOW IT WORKS SECTION || FEATURES */}
                <div className=" bg-transparent-white p-10">
                    <h4 className="text-center text-white-1 mb-10 text-Poppins font-bold text-xl">How it works</h4>
                    <div className="flex items-center justify-evenly">
                        <div>
                            <img className="block mx-auto" src={metamask} alt="meta-mask-svg" />
                            <p className="text-center font-Montserrat font-bold text-white-1">Connect Wallet</p>
                            <p className="text-center font-Montserrat font-normal text-white-1">Tap the connect wallet icon above</p>
                        </div>
                        <div>
                            <img className="block mx-auto" src={wallet} alt="wallet-svg" />
                            <p className="text-center font-Montserrat  font-bold text-white-1">Create/Join Purse</p>
                            <p className="text-center font-Montserrat font-normal text-white-1">Join existing purse that matches<br /> your savings target</p>
                        </div>
                        <div>
                            <img className="block mx-auto " src={money} alt="deposit-svg" />
                            <p className="text-center font-Montserrat font-bold text-white-1">Deposit</p>
                            <p className="text-center font-Montserrat font-normal text-white-1">Use the depsit function to start<br /> saving</p>
                        </div>
                    </div>
                </div>
                {/* DESC */}
                <div className="bg-dark-1 flex justify-between mt-12 p-24">
                    <div className="w-3/6 mr-24">
                        <div className="bg-white w-full rounded-lg p-8">
                            <h5 className="text-dark font-extrabold font-Poppins">Safe and open source</h5>
                            <img className="block mx-auto" src={home} alt="home-svg" />
                            <p className="font-Montserrat font-light">Fully transparent and secure purses. Our purse is
                                <b> open source</b> and trusted by all.</p>

                        </div>
                    </div>
                    <div className="w-3/6 flex justify-center">
                        <div>
                            <p className="text-white-1 font-Poppins mb-12 font-bold">What we do to help<br />
                                our users.</p>
                            <div className="bg-white  rounded-lg mr-11 p-8">
                                <img className="block mx-auto" src={customer} alt="customer-svg" />
                                <h5 className="text-dark font-extrabold font-Poppins mt-6">Stake</h5>
                                <p className="font-Montserrat font-light">We offer stake function for user to stake and earn rewards on thier savings.</p>
                                <p className="flex items-center mt-4 text-purple-400">
                                <span className="mr-4 font-semibold font-Monserat"><a href="!#"> Coming soon ......</a></span>
                                    <span><BsArrowRightShort /></span>
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg mb-24 -translate-y-16 p-6">
                            <img className="block mx-auto  -translate-y-12" src={chat} alt="chat-svg" />
                            <h5 className="text-dark font-extrabold font-Poppins">Swap</h5>
                            <p className="font-Montserrat font-light">Easily swap Ethereum and other Erc-20 tokens </p>
                            <p className="flex items-center mt-4 text-purple-400">
                                <span className="font-semibold font-Monserat"><a href="!#"> Learn more</a></span>
                                <span><BsArrowRightShort /></span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Landing
