import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "../../../components/buttons/Button";

const Jumbotron = () => {
    const navigate = useNavigate();
    const redirectToApp = () => {
      navigate("/app/purses");
    };
    return (
        <React.Fragment>
            <div className=" flex-col-reverse flex md:justify-between mb-16 md:mb-0 lg:mb-0 md:flex md:flex-row md:items-center lg:justify-between lg:flex  lg:flex-row lg:items-center p-9 md:p-8 lg:p-16">
                <div className=" -mt-48 md:mt-0 lg:mt-0 text-center md:text-left lg:text-left">
                    <h2 className="font-Montserrat lg:leading-tight font-extrabold text-xl md:text-3xl lg:text-6xl mb-4 text-white-1">
                        Here it is, your truly Decentralised Thrift
                    </h2>
                    <p className="text-white-1 leading-tight break-words font-Poppins font-bold text-xs md:text-xl w-full md:w-full lg:w-3/5">
                        Create or join already created purses to quickly
                        and easily meet your financial target.
                    </p>
                    <Button action={redirectToApp}>Launch App</Button>
                </div>
                <div className=" -mt-24 md:mt-0 lg:mt-0 md:-translate-x-36 lg:-translate-x-96">
                    <div>
                        <img src="/assets/coin.svg" alt="coin" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Jumbotron