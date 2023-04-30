import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

const Navbar = () => {
  const { photo, formik } = useContext(UserContext);

  return (
    <nav className="flex items-center justify-between w-full px-[28px] py-[23px] bg-black">
      <Link to="/">
        <p className="text-[36px] font-[poppins-extraBold] cursor-pointer">
          TO DO
        </p>
      </Link>
      <span className="flex items-center font-[poppins-light]">
        <h1 className="capitalize text-[#fff] text-[22px] ">
          {formik.values.name}
        </h1>
        <div
          className="bg-[#E6EBFF] w-[68px] h-[68px] rounded-full ml-[20px] cursor-pointer bg-no-repeat bg-cover bg-center hover:scale-[1.07] transition-transform"
          style={{
            backgroundImage: `url(${photo.photo})`,
          }}
        ></div>
      </span>
    </nav>
  );
};

export default Navbar;
