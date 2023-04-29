import React from "react";


function Features() {
    return (
        <React.Fragment>
            <section className="container p-6 mx-auto dark:bg-dark-1 bg-light-1 md:p-12 lg:flex lg:justify-between lg:mt-12">
                <div className="mb-24 lg:w-3/6 lg:mr-32">
                    <div className="w-full p-8 bg-white rounded-lg shadow-box">
                        <h5 className="mb-12 font-extrabold text-dark-1 text-medium font-Poppins">
                            Free and Open source
                        </h5>
                        <img
                            className="block mx-auto"
                            src="/assets/home.svg"
                            alt="home-svg"
                        />
                        <p className="mt-6 font-light text-dark-1 font-Montserrat leading-sm-height">
                            Fully transparent and secure purses. Our purse is
                            <span className="ml-1 font-bold">
                                open source
                            </span>{" "}
                            and trusted by all.
                        </p>
                    </div>
                </div>
                <div className="lg:w-3/6 lg:flex lg:justify-center">
                    <div>
                        <p className="mb-12 font-extrabold dark:text-white-1 text-dark-1 text-medium leading-medium font-Poppins">
                            What we do to help
                            <br />
                            our users.
                        </p>
                        <div className="p-8 bg-white rounded-lg shadow-box mb-36 lg:mr-11">
                            <img
                                className="block mx-auto"
                                src="/assets/reminder.svg"
                                alt="customer-svg"
                            />
                            <h5 className="mt-6 mb-4 font-bold text-dark-1 text-medium leading-mini font-Poppins">
                                Task Reminders
                            </h5>
                            <p className="font-normal text-dark-1 font-Montserrat leading-sm-height">
                                Reminding you to manage purse adequately as
                                required
                            </p>
                            {/* <p className="flex items-center mt-4 text-purple-600">
                                <span className="font-semibold font-Monserat">
                                    <button className="cursor-pointer" onClick={() => navigate('#')}> Learn more</button>
                                </span>
                                <span>
                                    <BsArrowRightShort />
                                </span>
                            </p> */}
                        </div>
                    </div>
                    <div className="p-6 -translate-y-1 bg-white rounded-lg shadow-box h-25">
                        <img
                            className="block mx-auto mb-4 "
                            src="/assets/check.svg"
                            alt="chat-svg"
                        />
                        <h5 className="font-extrabold text-dark-1 text-medium font-Poppins">
                            Flexible purses
                        </h5>
                        <p className="font-light text-dark-1 font-Montserrat leading-sm-height">
                            Create/join purses that meet your money your
                            financial position, for business/personal needs.{" "}
                        </p>
                        {/* <p className="flex items-center mt-4 text-purple-600">
                            <span className="font-semibold font-Monserat">
                                <button className="cursor-pointer" onClick={() => navigate('#')}> Learn more</button>
                            </span>
                            <span>
                                <BsArrowRightShort />
                            </span>
                        </p> */}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Features;
