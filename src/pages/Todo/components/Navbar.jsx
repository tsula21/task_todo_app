import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-[28px] py-[23px] bg-black">
      <p className="text-[36px] font-[poppins-extraBold] cursor-pointer">
        TO DO
      </p>
      <span className="flex items-center font-[poppins-light]">
        <h1 className="capitalize text-[#fff] text-[22px] ">your name</h1>
        <div className="bg-[#E6EBFF] w-[68px] h-[68px] rounded-full ml-[20px] cursor-pointer"></div>
      </span>
    </nav>
  );
};

export default Navbar;
