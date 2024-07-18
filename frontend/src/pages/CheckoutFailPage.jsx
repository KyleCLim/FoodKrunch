import React, { useEffect } from "react";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/userAuth/useAuth";

const CheckoutFailPage = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };
    // If someone tries to access this page without logging in
    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);
    return (
        <div className="checkoutBackground">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                crossorigin="anonymous"
            />
            <div className="failCheckoutBox">
                <div className="checkoutHeader">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        fill="red"
                        className="bi bi-x-circle"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <h2 className="failedNotice">Failed Payment</h2>
                </div>
                <div className="orderProcessNotice">
                    <h5>
                        Your payment is not successfully processed. Please
                        contact out customer support.
                    </h5>
                </div>
                <button className="backButton" onClick={handleClick}>
                    BACK TO HOME
                </button>
            </div>
        </div>
    );
};

export default CheckoutFailPage;
