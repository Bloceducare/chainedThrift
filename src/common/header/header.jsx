import React from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import HeaderButton from "../buttons/headerButton";

const Header = ({ data = [] , theme, changeTheme},) => {
  
  const navigate = useNavigate();
  const redirectToApp = () => {
    navigate("/app/purses");
  };
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const handleRedirect = (link) => {
    navigate(link);
  };
  return (
    <>
      <nav className={`relative flex flex-wrap items-center justify-between px-2 py-0  mb-3`}>
        <div className={`container px-4 py-2  ${theme === 'dark'?'bg-dark-1' : 'bg-light-gradient'} mx-auto flex flex-wrap rounded-br rounded-bl  items-center justify-between`}>
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="flex items-center cursor-pointer"
              onClick={changeTheme}
              // onClick={() => handleRedirect("/")}
            >
              <div
                className={`w-10 h-10 rounded-full overflow-hidden shrink-0`}
              >
                <img
                  className="w-10 md:w-10 lg:w-14 -rotate-12"
                  src="/assets/Vector.svg"
                  alt="web3brigde-logo"
                />
              </div>
              <div>
                <h3 className={`font-Montserrat font-extrabold lg:text-base sm:text-xs uppercase ${theme === 'dark'? 'text-white-1' : 'text-dark-1' } `}>
                  Chained thrift
                </h3>
              </div>
            </div>
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
            <div className="flex flex-col lg:flex-row items-center list-none lg:ml-auto lg:mr-4">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`font-Poppins  text-base  font-extrabold ${theme === 'dark'? 'text-white-1' : 'text-dark-1' }  mr-24 cursor-pointer`}
                    onClick={() => handleRedirect(item.link)}
                  >
                    {item.value}
                  </div>
                );
              })}
            <HeaderButton action={redirectToApp}>Launch App</HeaderButton>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
