import React from "react";

const NavBar = () => {
  return (
    <div className="navbar">
      <a className="logo">
        <span>IN</span>
        <span>DA</span>
        <span>CUP</span>
      </a>
      <p>indacup.fr/</p>
      <div className="links-nav">
        <a href="#">About</a>
        <a href="#">Blog</a>
      </div>
    </div>
  );
};

export default NavBar;
