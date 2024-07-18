import React, { useState, useContext, useEffect } from "react";
import BannerBackground from "../assets/home-banner-background.png";
import LoginModal from "../components/LoginModal";
import axios from "axios";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import UserProfileForm from "./pages_components/UserProfileForm";
import { useAuth } from "../hooks/userAuth/useAuth";

const UserProfilePage = () => {
    const { currentUser, login } = useAuth();
    const [fName, setFName] = useState(currentUser?.first_name || "");
    const [lName, setLName] = useState(currentUser?.last_name || "");
    const [email, setEmail] = useState(currentUser?.email || "");
    const [phoneNum, setPhoneNum] = useState(currentUser?.phone_number || "");
    const [address, setAddress] = useState(currentUser?.address || "");
    const [modal, setModal] = useState("");
    const navigate = useNavigate();
    const updatedUser = {
        first_name: fName,
        last_name: lName,
        email: email,
        phone_number: phoneNum,
    };

    // If someone tries to access this page without logging in
    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    // Update localStorage whenever any of the fields change
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user")) || {};
        const update = {
            ...storedUser,
            ...updatedUser,
        };
        localStorage.setItem("user", JSON.stringify(update));
    }, [fName, lName, email, phoneNum]);

    // Notice after user profile update
    const [notice, setNotice] = useState(null);

    // Handles saving of updated user info
    const handleSave = async (e, prev) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                `http://localhost:8800/api/user/update`,
                {
                    fName,
                    lName,
                    email,
                    phoneNum,
                    address,
                },
                { withCredentials: true }
            );
            console.log(res);
            setNotice(res.data); //gets notice update after saving
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="userProfileContainer">
            {modal === "login" &&
                createPortal(
                    <LoginModal
                        onSubmit={login}
                        onCancel={() => setModal(null)}
                        onClose={() => setModal(null)}
                    />,
                    document.body
                )}
            <div className="homeBannerImgContainer">
                <img src={BannerBackground} alt="banner background" />
            </div>
            <UserProfileForm
                currentUser={currentUser}
                fName={fName}
                lName={lName}
                email={email}
                phoneNum={phoneNum}
                address={address}
                setFName={setFName}
                setLName={setLName}
                setEmail={setEmail}
                setPhoneNum={setPhoneNum}
                setAddress={setAddress}
                handleSave={handleSave}
                setModal={setModal}
                notice={notice}
            />
        </div>
    );
};

export default UserProfilePage;
