import React from "react";
import TextField from "@mui/material/TextField";
//
import ApplicationTitle from "../../components/ApplicationTitle";
import photo from "../../assets/add_photo.svg";

const AuthForm = () => {
  return (
    <form className="w-[588px] h-[688px] bg-[#fff] mx-[auto]">
      <div className="form_container">
        <div className="flex items-center flex-col">
          <ApplicationTitle
            Text="Get Started"
            className="text-[48px] text-[#000] mb-[44px] font-[poppins-semi]"
          />
          <p className="text-[22px] text-[#000] mb-[10px] font-[poppins-light]">
            add a photo
          </p>
          <div className="w-[122px] h-[122px] bg-[#E6EBFF] rounded-full flex items-center justify-center cursor-pointer mb-[53px]">
            <img src={photo} alt="add_photo" />
          </div>
          <p className="text-[22px] text-[#000] mb-[16px] font-[poppins-light]">
            fill in you name
          </p>
          <TextField
            sx={{
              backgroundColor: "#E6EBFF",
              width: "100%",
              borderRadius: "4px",
              // "& fieldset": { border: "none", },
            }}
            InputProps={{ disableUnderline: true }}
            id="filled-basic"
            label="your name"
            variant="filled"
          />
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
