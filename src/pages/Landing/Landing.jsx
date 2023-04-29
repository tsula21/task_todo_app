import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
//
import Logo from "../../assets/todo_logo.svg";
import ApplicationLogo from "../../components/ApplicationLogo";
import ApplicationTitle from "../../components/ApplicationTitle";
import PrimaryButton from "../../components/PrimaryButton";

const Landing = () => {
  // GSAP
  let circle = useRef(null);
  let headerDetails = useRef(null);
  let rulesElem = useRef(null);

  useEffect(() => {
    // GSAP;
    gsap.fromTo(
      circle.current,
      { y: "-100%" },
      { y: 0, duration: 2, delay: 0.2 }
    );
    gsap.fromTo(
      headerDetails.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 2.2 }
    );
    gsap.fromTo(
      rulesElem.current,
      { y: "150%", opacity: 0 },
      { y: 0, opacity: 1, duration: 2, delay: 0.2 }
    );
  }, []);
  return (
    <div className="flex items-center flex-col pt-[90px] overflow-hidden">
      <ApplicationLogo
        Logo={Logo}
        className="cursor-pointer h-[165px] w-[90px] mb-[46px]"
        circle={circle}
      />
      <ApplicationTitle
        Text="Keep Track Of Daily Tasks In Life"
        className="text-[40px] text-[#fff] mb-[149px] font-[poppins-semi] mt-[33px]"
        headerDetails={headerDetails}
      />
      <Link to="/AuthForm">
        <PrimaryButton
          className="bg-[#5EFC8D] hover:bg-[#fff] hover:text-[#000] transition-colors rounded-[4px] w-[388px] h-[98px] py-[16px] text-[48px] text-[#000] font-[poppins-light] capitalize"
          gsap={rulesElem}
        >
          Get Started
        </PrimaryButton>
      </Link>
    </div>
  );
};

export default Landing;
