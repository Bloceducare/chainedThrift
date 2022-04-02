import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderButton from "../buttons/headerButton";
import { useWeb3React } from "@web3-react/core";
import Connected from "../connected/connected";
import Button from "../../common/themeingToggle/Button";
import useTheme from "../../hooks/useTheme";
import { NavLink } from "react-router-dom";

const AppHeader = ({ displayWalletModal, data = [], toggleDrawer }) => {

  const {changeTheme} = useTheme()

  const navigate = useNavigate();
  const { active, account } = useWeb3React()
  // console.log({ activeTab });
  const handleRedirect = (link) => {
    navigate(link);
  };
  return (
    <header className="relative dark:bg-dark-1 bg-light-1 flex flex-wrap items-center justify-between px-2 py-0">
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
          </div>
         
            <nav className="hidden lg:flex lg:flex-row items-center lg:ml-auto lg:mr-4">
              {data.map((item, index) => {
                return (
                  <NavLink
                    key={index}
                    className={({isActive}) => `font-Poppins text-base font-extrabold dark:text-white-1 text-dark-1 mr-24 cursor-pointer ${isActive && " border-b-4 border-b-dark-1 dark:border-b-white-1"}`}
                    to = {item.link}
                  >
                    {item.value}
                  </NavLink>
                );
              })}
            {active ?
              <Connected address={account} balance={0} /> :
              <HeaderButton action={displayWalletModal}>Connect wallet</HeaderButton>
            }
          </nav>
          <div className="flex items-center">
          <Button  className= "dark:transform-none transform translate-x-6 dark:translate-none" action={changeTheme}/>
          <button
            className="block lg:hidden text-white cursor-pointer outline-none ml-4"
            type="button"
            onClick={toggleDrawer}
          >
            <GiHamburgerMenu className="text-white-1 text-2xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
