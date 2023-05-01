import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./Landing.scss";
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
      { y: "-150%" },
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
    <div className="landing">
      <div className="landing_wrapper">
        <ApplicationLogo Logo={Logo} className="landing_Icon" circle={circle} />
        <ApplicationTitle
          Text="Keep Track Of Daily Tasks In Life"
          className="landing_title "
          headerDetails={headerDetails}
        />
        <Link to="/AuthForm">
          <PrimaryButton className="landing_button" gsap={rulesElem}>
            Get Started
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
