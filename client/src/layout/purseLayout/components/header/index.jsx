import React from "react";
// import { useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi"
// import HeaderButton from "../../../../components/buttons/HeaderButton";

const Navbar = ({ data = [] }) => {
  // const navigate = useNavigate();
  // const handleRedirect = (link) => {
  //   navigate(link);
  // };
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-dark-1 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <p className="text-white-1">Dashboard Header....</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
