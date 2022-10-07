import React from 'react';
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Features() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <section className="container mx-auto dark:bg-dark-1 bg-light-1  p-6  md:p-12 lg:flex lg:justify-between lg:mt-12">
                <div className="lg:w-3/6 mb-24 lg:mr-32">
                    <div className="shadow-box bg-white w-full rounded-lg p-8">
                        <h5 className = "text-dark-1 font-extrabold text-medium mb-12 font-Poppins">
                            Free and Open source
                        </h5>
                        <img
                            className="block mx-auto"
                            src="/assets/home.svg"
                            alt="home-svg"
                        />
                        <p className="text-dark-1 font-Montserrat leading-sm-height mt-6 font-light">
                            Fully transparent and secure purses. Our purse is 
                            <span className='font-bold ml-1'>open source</span> and trusted by all.
                        </p>
                    </div>
                </div>
                <div className="lg:w-3/6 lg:flex lg:justify-center">
                    <div>
                        <p className="dark:text-white-1 text-dark-1 text-medium leading-medium font-Poppins mb-12 font-extrabold">
                            What we do to help
                            <br />
                            our users.
                        </p>
                        <div className="bg-white shadow-box rounded-lg mb-36 lg:mr-11 p-8">
                            <img
                                className="block mx-auto"
                                src="/assets/reminder.svg"
                                alt="customer-svg"
                            />
                            <h5 className="text-dark-1 text-medium leading-mini mb-4 font-bold font-Poppins mt-6">
                                Task Reminders
                            </h5>
                            <p className="text-dark-1 font-Montserrat font-normal leading-sm-height">
                            The process of managing a task through reminders. It involves planning, testing, tracking.
                            </p>
                            <p className="flex items-center mt-4 text-purple-600">
                                <span className="font-semibold font-Monserat">
                                    <button className="cursor-pointer" onClick={() => navigate('#')}> Learn more</button>
                                </span>
                                <span>
                                    <BsArrowRightShort />
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white shadow-box rounded-lg h-25 -translate-y-1 p-6">
                        <img
                            className="block mb-4 mx-auto "
                            src="/assets/check.svg"
                            alt="chat-svg"
                        />
                        <h5 className="text-dark-1 font-extrabold text-medium font-Poppins">Flexible purses</h5>
                        <p className="text-dark-1 font-Montserrat font-light leading-sm-height">
                        Create/join purses that meet your money your financial position, for business/personal needs.{" "}
                        </p>
                        <p className="flex items-center mt-4 text-purple-600">
                            <span className="font-semibold font-Monserat">
                                <button className="cursor-pointer" onClick={() => navigate('#')}> Learn more</button>
                            </span>
                            <span>
                                <BsArrowRightShort />
                            </span>
                        </p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Features