import React from "react";
import "./NavBar.css"
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import CreateButton from "./CreateButton";
import Notification from "./Notification";
import UserAccount from "./UserAccount";
function NavBar() {
    return (<>
        <div className="navbar-container">
            <div className="navbar-logo">
            <Logo />
            </div>
            <div className="navbar-searchbar">
            <SearchBar />
            </div>
            <div className="navbar-createbtn">
            <CreateButton />
            </div>
            <div className="navbar-notification">
            <Notification />
            </div>
            <div className="navbar-account">
            <UserAccount />
            </div>
           
        </div>
    </>);
}

export default NavBar;