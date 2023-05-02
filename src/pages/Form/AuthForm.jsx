import React, { useState, useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./AuthForm.scss";
//
import ApplicationTitle from "../../components/ApplicationTitle";
import Photo from "../../assets/add_photo.svg";
import PrimaryButton from "../../components/PrimaryButton";

const AuthForm = () => {
  const { photo, setPhoto, formik, setIsRegistered } = useContext(UserContext);

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

  let formAnimation = useRef(null);

  useEffect(() => {
    // GSAP;
    gsap.fromTo(
      formAnimation.current,

      { opacity: 0 },
      { opacity: 1, duration: 1.2, delay: 0.2 }
    );
  }, []);

  return (
    <div className="auth_form">
      <form ref={formAnimation}>
        <div className="form_container">
          <div className="flex items-center flex-col">
            <ApplicationTitle Text="Get Started" className="auth_form_title" />
            <p className="auth_form_subtitle">add a photo</p>
            <div className="auth_photo_frame">
              {/* This is an input field that allows the user to select an image file from their device. */}
              <input
                className="auth_photo_input"
                type="file"
                name="upload_file"
                onChange={handleInputChange}
                accept="image/*"
              />

              {photo.photo ? (
                <div
                  className="auth_photo"
                  style={{
                    backgroundImage: `url(${photo.photo})`,
                  }}
                ></div>
              ) : (
                <img src={Photo} alt="add_photo" />
              )}
            </div>
            <p
              className="auth_form_subtitle2"
              onClick={() => console.log(photo)}
            >
              fill in you name
            </p>
            <div className="auth_name_input_wrapper">
              {/* Input for user name */}
              <input
                className={`auth_name_input border  ${
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
            {formik.values.name.length == 0 || formik.errors.name ? (
              <PrimaryButton type="button" className="auth_button active">
                Sign In
              </PrimaryButton>
            ) : (
              <Link to="/Todo" onClick={() => setIsRegistered(true)}>
                <PrimaryButton type="button" className="auth_button">
                  Sign In
                </PrimaryButton>
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
