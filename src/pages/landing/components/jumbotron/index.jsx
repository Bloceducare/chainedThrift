import React from 'react';
// import { useNavigate } from "react-router-dom";
// import Button from "../../../../common/buttons/button";
import "./index.scss"

const Jumbotron = () => {
    // const navigate = useNavigate();
    // const redirectToApp = () => {
    //   navigate("/app/purses");
    // };
    return (
        <section className="jumbo-section container mx-auto mb-0 md:mb-16 lg:mb-16 md:mb-0  pt-40 md:mt-0 md:py-40 lg:py-48">
            <div className="text-center py-8 sm:px-8 xl:px-0 md:text-left lg:text-left">
                <h2 className="jumbo-heading font-Poppins md:font-Montserrat lg:font-Montserrat lg:leading-tight font-extrabold  text-3xl md:text-5xl lg:text-7xl mb-0 md:mb-4 lg:mb-4 dark:text-white-1 text-dark-1">
                    Here it is, your truly Decentralised Thrift
                </h2>
                <p className="jumbo-text dark:text-white-1 text-dark-1  leading-tight break-words font-Poppins font-bold text-xs md:text-xl w-full md:w-full lg:w-3/5 pl-14 md:pl-0 lg:pl-0 pr-14 md:pr-0 lg:pr-0 md:p-0 lg:p-0">
                    Create or join already created purses to quickly
                    and easily meet your financial target.
                </p>
                {/* <Button action={redirectToApp}>Launch App</Button> */}
            </div>
        </section>
    )
}

export default Jumbotron