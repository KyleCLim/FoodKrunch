import React, { useEffect } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks/userAuth/useAuth";

const CheckoutSuccessPage = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await axios.delete(
                `http://localhost:8800/api/cart/cartDelete/allItems`,
                {
                    withCredentials: true,
                }
            );
            localStorage.setItem("cart", JSON.stringify([]));
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    // If someone tries to access this page without logging in
    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    return (
        <div className="checkoutBackground">
            <div className="checkoutBox">
                <div className="checkoutHeader">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="rgb(65, 185, 65)"
                        className="bi bi-check2-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                    </svg>
                    <h2 className="successNotice">
                        Thank you for your purchase!
                    </h2>
                </div>
                <div className="orderProcessNotice">
                    <h5>Your order has been processed.</h5>
                    <h5>
                        We will email you with an order confirmation with
                        details.
                    </h5>
                </div>
                <button className="backButton" onClick={handleClick}>
                    BACK TO HOME
                </button>
            </div>
        </div>
    );
};

export default CheckoutSuccessPage;
