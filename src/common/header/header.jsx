import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import HeaderButton from "../buttons/headerButton";
import ThemeSwitch from "../themeSwitch/themeSwitch";
import useTheme from "../../hooks/useTheme";

const Header = ({ data = [], toggleDrawer }) => {
    const { theme, changeTheme } = useTheme();
    const navigate = useNavigate();
    // const redirectToApp = () => {
    //   navigate("/app/purses");
    // };
    const handleRedirect = (link) => {
        navigate(link);
    };
    return (
        <header className="relative flex flex-wrap items-center justify-between px-2 py-0 dark:bg-dark-1 bg-light-1">
            <div className="container flex flex-wrap items-center justify-between px-4 py-2 mx-auto rounded-bl rounded-br dark:bg-nav-dark bg-nav-light">
                <div
                    className="flex items-center cursor-pointer"
                    onClick={() => handleRedirect("/")}
                >
                    <img
                        className="w-6 mr-2 md:w-10 lg:w-14"
                        src="/assets/ellipse.svg"
                        alt="chainedThrift-logo"
                    />
                    <span className="text-xs font-black uppercase font-Montserrat md:text-base dark:text-white-1 text-dark-1">
                        Chained thrift
                    </span>
                </div>

                <nav className="items-center hidden lg:flex lg:flex-row lg:ml-auto lg:mr-4">
                    {data.map((item, index) => {
                        return (
                            <NavLink
                                key={index}
                                className={({ isActive }) =>
                                    `font-Poppins text-base font-extrabold dark:text-white-1 text-dark-1 mr-24 cursor-pointer ${
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
                    <a
                        href="https://discord.com/invite/ZfSvh7D5"
                        target="_blank"
                        rel="noreferrer"
                        className={`font-Poppins text-base font-extrabold dark:text-white-1 text-dark-1 mr-24 cursor-pointer`}
                    >
                        Community
                    </a>
                    {/* <a href="https://mumbai.polygonscan.com/address/0xeae9911b42bf966f038d2ef49563012e31a2b409#writeContract"
           className={ `font-Poppins text-base font-extrabold dark:text-white-1 text-dark-1 mr-24 cursor-pointer`}
           target="_blank" rel="noopener noreferrer"
          >Claim CTT Token</a> */}
                    {/* <HeaderButton>Launch App</HeaderButton> */}
                </nav>

                <div className="flex items-center">
                    <ThemeSwitch
                        className="transform translate-x-6 dark:transform-none dark:translate-none"
                        action={changeTheme}
                        theme={theme}
                    />
                    <button
                        className="block ml-4 text-white outline-none cursor-pointer lg:hidden"
                        type="button"
                        onClick={toggleDrawer}
                    >
                        <GiHamburgerMenu className="text-2xl text-white-1" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
