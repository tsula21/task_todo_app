import React, { useState, useContext } from "react";
import * as yup from "yup";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

//

import ApplicationTitle from "../../components/ApplicationTitle";
import Photo from "../../assets/add_photo.svg";
import PrimaryButton from "../../components/PrimaryButton";

const AuthForm = () => {
  const { photo, setPhoto, formik } = useContext(UserContext);

  const handleInputChange = (e) => {
    const img = e.target.files[0];
    const updateValue = {
      ...photo,
      photo: URL.createObjectURL(img),
    };

    if (!checkImage(img)) {
      alert("Please select a valid image file.");
      e.target.value = null;
      return;
    }
    setPhoto(updateValue);
  };

  const checkImage = (file) => {
    return file && file["type"].split("/")[0] === "image";
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
              accept="image/*"
            />

            {photo.photo ? (
              <div
                className="w-[122px] h-[122px] rounded-full bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${photo.photo})`,
                }}
              ></div>
            ) : (
              <img src={Photo} alt="add_photo" />
            )}
          </div>
          <p
            className="text-[22px] text-[#000] mb-[16px] font-[poppins-light]"
            onClick={() => console.log(photo)}
          >
            fill in you name
          </p>
          <div className="w-full mb-[76px] 2xl:mb-[60px]">
            <input
              className={`bg-[#E6EBFF] w-full rounded-[4px] h-[76px] px-[24px] py-[22px] text-[22px] border text-[#000]  outline-none ${
                formik.errors.name ? "border-[red]" : ""
              }`}
              placeholder="your name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              autoComplete="off"
            />
          </div>
          {/* Sign In Button */}
          {formik.values.name.length == 0 || formik.errors.name || photo[0] ? (
            <PrimaryButton
              type="button"
              className="bg-[#aaaaaa] cursor-default transition-colors rounded-[4px] w-[258px] h-[66px] text-[32px] text-[#000] font-[poppins-light] capitalize"
            >
              Sign In
            </PrimaryButton>
          ) : (
            <Link to="/Todo">
              <PrimaryButton
                type="button"
                className="bg-[#5EFC8D] hover:bg-[#000] hover:text-[#fff] transition-colors rounded-[4px] w-[258px] h-[66px] text-[32px] text-[#000] font-[poppins-light] capitalize"
              >
                Sign In
              </PrimaryButton>
            </Link>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
