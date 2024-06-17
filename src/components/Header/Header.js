import React from "react";


/* ===== Import Logo ===== */
import Logo from "../../images/logo.svg";
const Header = () => {
  return (
    <>
    <div id="header">
      <div className="row">
        <div className="col-lg-2">
          <img src={Logo} alt="E-commerce Logo"/>
        </div>
        <div className="col-lg-5"></div>
        <div className="col-lg-5"></div>
      </div>
    </div>
    </>
  )
};

export default Header;
