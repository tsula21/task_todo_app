import React, { useContext, useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { UserContext } from "../../../UserContext";

const Navbar = () => {
  const { photo, formik, clearUser } = useContext(UserContext);
  const [modal, setModal] = useState(false);

  let navelems = useRef(null);
  let avatar = useRef(null);
  let navLogo = useRef(null);

  useEffect(() => {
    // GSAP;
    gsap.fromTo(
      navelems.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, delay: 1.2 }
    );
    gsap.fromTo(
      avatar.current,
      { x: "-150%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 }
    );
    gsap.fromTo(
      navLogo.current,
      { x: "150%", opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 0.2 }
    );
  }, []);

  return (
    <nav className="relative ">
      <p ref={navLogo} className="logo">
        TO DO
      </p>

      <span ref={avatar}>
        <h1 ref={navelems}>{formik.values.name}</h1>
        <div
          className="nav_avatar"
          onClick={() => setModal(!modal)}
          style={{
            backgroundImage: `url(${photo.photo})`,
          }}
        ></div>
      </span>
      {modal && (
        <div className="bg-[grey] w-[100px] h-[50px] rounded-md flex items-center justify-center absolute z-3 right-[14px] top-[98px] select-none">
          <Link to="/">
            <p
              onClick={() => clearUser()}
              className=" cursor-pointer hover:bg-[#000] px-[5px] py-[1px] transition-colors active:bg-[#fff] active:text-[#fff]"
            >
              Log Out
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
