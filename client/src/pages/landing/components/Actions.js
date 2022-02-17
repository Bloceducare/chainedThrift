import React from 'react';



const Actions = () => {
    return (
        <React.Fragment>
            <div className=" bg-transparent-white p-10">
                <h4 className="text-center text-white-1 mb-10 text-Poppins font-bold text-xl">
                    How it works
                </h4>
                {/* <div className=" flex-wrap md:justify-between md:flex  lg:flex lg:items-center lg:justify-between"> */}
                <div className="grid gap-8 lg:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                    <div>
                        <img
                            className="block mx-auto"
                            src="/assets/Wallet.svg"
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
                            src="/assets/metamask.svg"
                            alt="wallet-svg"
                        />
                        <p className="text-center font-Montserrat  font-bold text-white-1">
                            Create/Join Purse
                        </p>
                        <p className="text-center font-Montserrat font-normal text-white-1">
                            Join existing purse that matches
                            <br /> your savings target
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
                            Use the depsit function to start
                            <br /> saving
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Actions;