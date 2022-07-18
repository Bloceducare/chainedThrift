import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderButton from "../buttons/headerButton";
import { useWeb3React } from "@web3-react/core";
import Connected from "../connected/connected";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import useTheme from "../../hooks/useTheme";
import { NavLink } from "react-router-dom";
import "./index.scss";

const AppHeader = ({ displayWalletModal, data = [], toggleDrawer, onClose }) => {
    const { theme, changeTheme } = useTheme();
    const navigate = useNavigate();
    const { active, account } = useWeb3React();

    const handleRedirect = (link) => {
        navigate(link);
    };

    return (
        <header className="dark:bg-dark-1 bg-light-1 flex flex-wrap items-center justify-between px-2 py-0">
            <div className="container px-4 py-2 dark:bg-nav-dark bg-nav-light mx-auto flex flex-wrap rounded-br rounded-bl items-center justify-between">
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleRedirect("/")}
                >
                    <img
                        className="w-10 md:w-10 lg:w-14 mr-2 "
                        src="/assets/ellipse.svg"
                        alt="chainedThrift-logo"
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
                                className={({ isActive }) =>
                                    `font-Poppins text-base font-extrabold dark:text-white-1 text-dark-1 mr-12 xl:mr-16 cursor-pointer ${
                                        isActive &&
                                        " border-b-4 border-b-dark-1 dark:border-b-white-1"
                                    }`
                                }
                                to={item.link}
                            >
                                {item.value}
                            </NavLink>
                        );
                    })}
                </nav>
                <div className="account-component">
                  {active ? (
                        <Connected onClose={onClose} address={account} balance={0} />
                    ) : (
                        <HeaderButton className = "mx-auto" action={displayWalletModal}>
                            Connect wallet
                        </HeaderButton>
                    )}
                </div>
                <div className="flex items-center">
                    <ThemeSwitch
                        className="dark:transform-none transform translate-x-6 dark:translate-none"
                        action={changeTheme}
                        theme = {theme}
                    />
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
