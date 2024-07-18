import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import LoginModal from "../LoginModal";
import { useModal } from "../../hooks/navbar/useModal";
import { useAuth } from "../../hooks/userAuth/useAuth";

const NavbarLinks = ({ currentUser, cartItemsCount }) => {
    // const [modalLoginOpen, setModalLoginOpen] = useState(false);
    const { login } = useAuth();
    const { isLoginOpen, openLogin, closeLogin } = useModal();

    const handleCatLinkClick = (e) => {
        if (!currentUser) {
            e.preventDefault();
            openLogin();
        }
    };

    return (
        <div className="navbarLinks">
            {isLoginOpen &&
                createPortal(
                    <LoginModal
                        onSubmit={login}
                        onCancel={closeLogin}
                        onClose={closeLogin}
                    />,
                    document.body
                )}
            <a href="/">Home</a>
            <a href="#aboutSection">About</a>
            <a href="#menuSection">Menus</a>
            <a href="/contact">Contact</a>
            <Link
                to={currentUser && "/cart"}
                className="cartLink"
                onClick={handleCatLinkClick}
            >
                <BsCart2 className="navbarCartIcon" />
                {currentUser && (
                    <span className="cartQty">{cartItemsCount}</span>
                )}
            </Link>
        </div>
    );
};

export default NavbarLinks;
