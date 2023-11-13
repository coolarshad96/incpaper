import React from "react";
import pic from "./../assets/vendor-paper-logo.png"
import "./Logo.css";

function Logo() {
    return ( <>
    <div className="logo-container">
        <img className="logo-box" src={pic} alt="logo" />
    </div>
    </> );
}

export default Logo;