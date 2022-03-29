import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import HeaderButton from "../buttons/headerButton";
import Button from "../../common/themeingToggle/Button";
import useTheme from "../../hooks/useTheme";

const Header = ({ data = []}) => {
  const {theme, changeTheme} = useTheme();
  const navigate = useNavigate();
  const redirectToApp = () => {
    navigate("/app/purses");
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const handleRedirect = (link) => {
    navigate(link);
  };
  const toggleClass = ' transform translate-x-6';
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
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <GiHamburgerMenu color="#fff" size="18" />
        </button>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <div className="flex flex-col lg:flex-row items-center list-none lg:ml-auto lg:mr-4">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="font-Poppins  text-base  font-extrabold dark:text-white-1 text-dark-1 mr-24 cursor-pointer"
                  onClick={() => handleRedirect(item.link)}
                >
                  {item.value}
                </div>
              );
            })}
          <HeaderButton action={redirectToApp}>Launch App</HeaderButton>
          </div>
          <Button  className={`${theme === 'dark'? null : toggleClass}`} action={changeTheme}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
