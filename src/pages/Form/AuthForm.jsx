import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
//
import ApplicationTitle from "../../components/ApplicationTitle";
import Photo from "../../assets/add_photo.svg";

const AuthForm = () => {
  const [photo, setPhoto] = useState([]);

  const handleInputChange = (e) => {
    // console.log(e.target.files);
    const updateValue = {
      ...photo,
      photo: URL.createObjectURL(e.target.files[0]),
    };
    // const updateResumeInfo = { ...photo, photo: updateValue };
    setPhoto(updateValue);
  };

  return (
    <form className="w-[588px] h-[688px] bg-[#fff] mx-[auto] rounded-[4px] 2xl:h-[640px]">
      <div className="form_container">
        <div className="flex items-center flex-col">
          <ApplicationTitle
            Text="Get Started"
            className="text-[48px] text-[#000] mb-[44px] font-[poppins-semi] mt-[33px]"
          />
          <p className="text-[22px] text-[#000] mb-[10px] font-[poppins-light]">
            add a photo
          </p>
          <div className="w-[122px] h-[122px] bg-[#E6EBFF] rounded-full flex items-center justify-center mb-[53px] 2xl:mb-[45px] relative">
            <input
              className="cursor-pointer w-[122px] h-[122px] rounded-full opacity-0 absolute z-[2]"
              type="file"
              name="upload_file"
              onChange={handleInputChange}
            />

            {photo ? (
              <img src={photo.photo} alt="avatar" />
            ) : (
              <img src={Photo} alt="add_photo" />
            )}
          </div>
          <p
            onClick={() => console.log(photo)}
            className="text-[22px] text-[#000] mb-[16px] font-[poppins-light]"
          >
            fill in you name
          </p>
          <div className="w-full mb-[76px] 2xl:mb-[60px]">
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
          <Link to="/AuthForm">
            <Button
              sx={{
                backgroundColor: "#5EFC8D",
                borderRadius: "4px",
                width: "258px",
                height: "66px",
                fontSize: "32px",
                color: " #000",
                fontFamily: "poppins-light",
                letterSpacing: "0px",
                "&:hover": { backgroundColor: "#3de870" },
              }}
              variant="contained"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
