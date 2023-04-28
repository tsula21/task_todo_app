import React from "react";
import { Link } from "react-router-dom";

//
import Logo from "../../assets/todo_logo.svg";
import ApplicationLogo from "../../components/ApplicationLogo";
import ApplicationTitle from "../../components/ApplicationTitle";
import PrimaryButton from "../../components/PrimaryButton";

const Landing = () => {
  return (
    <div className="flex items-center flex-col pt-[90px]">
      <ApplicationLogo
        Logo={Logo}
        className="cursor-pointer h-[165px] w-[90px] mb-[46px]"
      />
      <ApplicationTitle
        Text="Keep Track Of Daily Tasks In Life"
        className="text-[40px] text-[#fff] mb-[149px] font-[poppins-semi] mt-[33px]"
      />
      <Link to="/AuthForm">
        <PrimaryButton className="bg-[#5EFC8D] hover:bg-[#3de870] transition-colors rounded-[4px] w-[388px] h-[98px] py-[16px] text-[48px] text-[#000] font-[poppins-light] capitalize">
          Get Started
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default Landing;
