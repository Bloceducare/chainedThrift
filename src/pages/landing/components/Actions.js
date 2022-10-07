import React from 'react';

const Actions = () => {
    return (
        <React.Fragment>
            <section className="bg-gray-8 p-10 mb-32">
                <div className= "container mx-auto">
                     <h4 className="text-center text-white-1 mb-10 font-Poppins font-bold text-xl">
                        How it works
                    </h4>
                    <div className="grid gap-24 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                        <div>
                            <img
                                className="block mx-auto"
                                src="/assets/metamask.svg"
                                alt="meta-mask-svg"
                            />
                            <p className="text-center font-Montserrat font-bold text-white-1">
                                Connect Wallet
                            </p>
                            <p className="text-center font-Montserrat font-normal text-white-1">
                                Tap the connect wallet icon above
                            </p>
                        </div>
                        <div>
                            <img
                                className="block mx-auto"
                                src="/assets/Wallet.svg"
                                alt="wallet-svg"
                            />
                            <p className="text-center font-Montserrat  font-bold text-white-1">
                                Create/Join Purse
                            </p>
                            <p className="text-center font-Montserrat font-normal text-white-1">
                                Join existing purse that matches your savings target
                            </p>
                        </div>
                        <div>
                            <img
                                className="block mx-auto "
                                src="/assets/Money.svg"
                                alt="deposit-svg"
                            />
                            <p className="text-center font-Montserrat font-bold text-white-1">
                                Deposit
                            </p>
                            <p className="text-center font-Montserrat font-normal text-white-1">
                                Use the deposit function to start saving
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default Actions;