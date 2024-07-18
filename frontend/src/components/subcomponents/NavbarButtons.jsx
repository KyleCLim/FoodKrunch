import React from "react";
import { Link } from "react-router-dom";

const NavbarButtons = ({
    currentUser,
    logout,
    openLogin,
    openRegistration,
}) => (
    <div className="navbarButtons">
        {currentUser ? (
            <Link to="/user" className="userProfileLink">
                {currentUser.first_name}
            </Link>
        ) : (
            <button className="signUpButton" onClick={openRegistration}>
                SIGN UP
            </button>
        )}
        {currentUser ? (
            <button className="logButton" onClick={logout}>
                LOGOUT
            </button>
        ) : (
            <button className="logButton" onClick={openLogin}>
                LOGIN
            </button>
        )}
    </div>
);

export default NavbarButtons;
