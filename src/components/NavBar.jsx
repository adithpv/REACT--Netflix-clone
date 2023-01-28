import React, { useState, useEffect } from "react";

import "./navBar.css";

const NavBar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    const scrollFn = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", scrollFn);
    };
  }, []);

  return (
    <div className={`navBar ${show && "nav__black"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix-logo"
      />
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
      />
    </div>
  );
};

export default NavBar;
