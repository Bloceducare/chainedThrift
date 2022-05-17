import React from "react";

function Button(props) {
  return (
    <button
      className={`border-purple-1 bg-purple-1 text-white-1 cursor-pointer mt-2 sm:mt-4 font-Poppins font-extrabold text-sm  outline-none outline-offset-2 outline-1 rounded-full px-16 py-2 ${props.className}`}
      onClick={props.action}
    >
      {props.children}
    </button>
  );
}

export default Button;
