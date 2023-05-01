import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

const Navbar = () => {
  const { photo, formik } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">
        <p className="logo">TO DO</p>
      </Link>
      <span>
        <h1>{formik.values.name}</h1>
        <div
          className="nav_avatar"
          style={{
            backgroundImage: `url(${photo.photo})`,
          }}
        ></div>
      </span>
    </nav>
  );
};

export default Navbar;
