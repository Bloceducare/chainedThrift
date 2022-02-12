import React from "react";
import { useNavigate } from "react-router-dom";
import { landingNav } from "../../static/data";
import Button from "../../components/buttons/Button";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { BsArrowRightShort } from "react-icons/bs";

const Landing = () => {
  const navigate = useNavigate();
  const redirectToApp = () => {
    navigate("/app/purses");
  };
  return (
    <section>
      <div className="bg-overlay-img bg-dark-1 bg-unset bg-contain bg-no-repeat h-auto">
        <Header data={landingNav} />
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
        {/* HOW IT WORKS SECTION || FEATURES */}
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
                src="/assets/Money.svg"
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
        {/* DESC */}
        <div className="bg-dark-1 p-6  md:p-12 lg:flex lg:justify-between lg:mt-12 lg:p-24">
          <div className="lg:w-3/6 mb-24 lg:mr-24">
            <div className="bg-white w-full rounded-lg p-8">
              <h5 className="text-dark font-extrabold font-Poppins">
                Safe and open source
              </h5>
              <img
                className="block mx-auto"
                src="/assets/home.svg"
                alt="home-svg"
              />
              <p className="font-Montserrat font-light">
                Fully transparent and secure purses. Our purse is
                <b> open source</b> and trusted by all.
              </p>
            </div>
          </div>
          <div className="lg:w-3/6 lg:flex lg:justify-center">
            <div>
              <p className="text-white-1 font-Poppins mb-12 font-bold">
                What we do to help
                <br />
                our users.
              </p>
              <div className="bg-white  rounded-lg mb-36 lg:mr-11 p-8">
                <img
                  className="block mx-auto"
                  src="/assets/customer.svg"
                  alt="customer-svg"
                />
                <h5 className="text-dark font-extrabold font-Poppins mt-6">
                  Stake
                </h5>
                <p className="font-Montserrat font-light">
                  We offer stake function for user to stake and earn rewards on
                  thier savings.
                </p>
                <p className="flex items-center mt-4 text-purple-400">
                  <span className="mr-4 font-semibold font-Monserat">
                    <button  className="cursor-pointer" onClick={() =>navigate('#')}> Coming soon ......</button>
                  </span>
                  <span>
                    <BsArrowRightShort />
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg mb-48 -translate-y-16 p-6">
              <img
                className="block mx-auto  -translate-y-12"
                src="/assets/chat.svg"
                alt="chat-svg"
              />
              <h5 className="text-dark font-extrabold font-Poppins">Swap</h5>
              <p className="font-Montserrat font-light">
                Easily swap Ethereum and other Erc-20 tokens{" "}
              </p>
              <p className="flex items-center mt-4 text-purple-400">
                <span className="font-semibold font-Monserat">
                <button className="cursor-pointer" onClick={() =>navigate('#')}> Learn more ......</button>
                </span>
                <span>
                  <BsArrowRightShort />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Landing;
