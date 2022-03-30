import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderButton from "../buttons/headerButton";
import { useWeb3React } from "@web3-react/core";
import Connected from "../connected/connected";
import Button from "../../common/themeingToggle/Button";
import useTheme from "../../hooks/useTheme";

const AppHeader = ({ displayWalletModal, data = [] }) => {

  const {theme, changeTheme} = useTheme()

  const navigate = useNavigate();
  const { active, account } = useWeb3React()
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(data[2].value);
  // console.log({ activeTab });
  const handleRedirect = (link) => {
    navigate(link);
  };

  const toggleClass = 'transform translate-x-6';
  return (
    <nav className="relative dark:bg-dark-1 bg-light-1 flex flex-wrap items-center justify-between px-2 py-0">
      <div className="container px-4 py-2 dark:bg-nav-dark bg-nav-light mx-auto flex flex-wrap rounded-br rounded-bl items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleRedirect("/")}
          >
            <img
              className="w-10 md:w-10 lg:w-14 -rotate-12"
              src="/assets/Vector.svg"
              alt="web3brigde-logo"
            />
            <span className="font-Montserrat font-extrabold lg:text-base sm:text-xs uppercase dark:text-white-1 text-dark-1">
              Chained thrift
            </span>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <GiHamburgerMenu color="#fff" size="18" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <div className="flex flex-col lg:flex-row list-none lg:ml-auto lg:mr-4">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeTab === item.value
                      ? `font-Poppins  text-base dark:text-white-1 text-dark-1 font-extrabold mr-24 cursor-pointer border-b-4 border-b-dark-1 dark:border-b-white-1 lg:px-6 mb-2 lg:mb-0`
                      : `font-Poppins  text-base dark:text-white-1 text-dark-1 font-extrabold mr-24 cursor-pointer mb-2 lg:mb-0`
                  }
                  onClick={() => {
                    handleRedirect(item.link);
                    setActiveTab(item.value);
                  }}
                >
                  {item.value}
                </div>
              );
            })}
            {active ?
              <Connected address={account} balance={0} /> :
              <HeaderButton action={displayWalletModal}>Connect wallet</HeaderButton>
            }

          </div>
          <Button  className={`${theme === 'dark'? null : toggleClass}`} action={changeTheme}/>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
