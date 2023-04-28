import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
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
        className="text-[40px] text-[#fff] mb-[149px] font-[poppins-semi]"
      />
      <Link to="/AuthForm">
        <Button
          sx={{
            backgroundColor: "#5EFC8D",
            borderRadius: "4px",
            width: "388px",
            height: "98px",
            paddingY: "16px",
            letterSpacing: "0px",
            fontSize: "48px",
            color: " #000",
            fontFamily: "poppins-light",
            textTransform: "capitalize",
            "&:hover": { backgroundColor: "#3de870" },
          }}
          variant="contained"
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Landing;
