import React from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../hooks/userAuth/useAuth";
import { useModal } from "../hooks/navbar/useModal";
import { useCart } from "../hooks/navbar/useCart";
import NavbarLogo from "./subcomponents/NavbarLogo";
import NavbarLinks from "./subcomponents/NavbarLinks";
import NavbarButtons from "./subcomponents/NavbarButtons";
import RegistrationModal from "./RegistrationModal";
import LoginModal from "./LoginModal";

const Navbar = () => {
    const { currentUser, logout } = useAuth();
    const { cartItemsCount } = useCart();
    const {
        isLoginOpen,
        openLogin,
        closeLogin,
        isRegistrationOpen,
        openRegistration,
        closeRegistration,
    } = useModal();

    return (
        <nav>
            {isRegistrationOpen &&
                createPortal(
                    <RegistrationModal
                        onCancel={closeRegistration}
                        onClose={closeRegistration}
                    />,
                    document.body
                )}
            {isLoginOpen &&
                createPortal(
                    <LoginModal onCancel={closeLogin} onClose={closeLogin} />,
                    document.body
                )}
            <NavbarLogo />
            <input type="checkbox" id="sidebarActive" />
            <label htmlFor="sidebarActive" id="overlay"></label>
            <label htmlFor="sidebarActive" className="openSidebarButton">
                <svg
                    className="mobileIcons"
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#5f6368"
                >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </label>
            <div className="navbarLinksContainer">
                <NavbarLinks
                    currentUser={currentUser}
                    cartItemsCount={cartItemsCount}
                />
                <NavbarButtons
                    currentUser={currentUser}
                    logout={logout}
                    openLogin={openLogin}
                    openRegistration={openRegistration}
                />
            </div>
        </nav>
    );
};

export default Navbar;
