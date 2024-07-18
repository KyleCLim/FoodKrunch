import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useAuth } from "../hooks/userAuth/useAuth";
import { useFormState } from "../hooks/booking/useFormState";
import { useBooking } from "../hooks/booking/useBooking";
import LoginModal from "./LoginModal";
import BookingForm from "./subcomponents/BookingForm";

const BooKTable = () => {
    const { currentUser, login } = useAuth();
    const [modal, setModal] = useState("");

    const initialState = {
        name: "",
        email: "",
        numPeople: "",
        bookingDate: "",
    };

    const validateForm = ({ name, email, numPeople, bookingDate }) => {
        if (!name || !email || !numPeople || !bookingDate) {
            return "All fields are required.";
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const selectedDate = new Date(bookingDate);

        if (selectedDate < today) {
            return "Booking date cannot be in the past.";
        }

        return "";
    };

    const { values, error, handleChange, handleValidation } = useFormState(
        initialState,
        validateForm
    );
    const { notice, bookTable } = useBooking(currentUser);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!handleValidation()) return;
        const result = await bookTable(values);
        if (result) setModal(result);
    };

    return (
        <div className="bookingSectionContainer" id="bookingSection">
            {modal === "login" &&
                createPortal(
                    <LoginModal
                        onSubmit={login}
                        onCancel={() => setModal("")}
                        onClose={() => setModal("")}
                    />,
                    document.body
                )}
            <div className="bookingInstructions">
                <h1 className="highlightHeading">
                    Book <span>Online</span>
                </h1>
                <p className="primaryText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ultrices in iaculis nunc sed augue lacus viverra.
                    Tortor pretium viverra suspendisse potenti.
                </p>
                <p className="primaryText">
                    Est ultricies integer quis auctor elit. Massa vitae tortor
                    condimentum lacinia quis vel eros donec. Ultricies leo
                    integer malesuada nunc vel risus commodo.
                </p>
            </div>
            <div className="bookingForm">
                <h2 className="bookingHeader">BOOK A TABLE</h2>
                {notice && (
                    <p className="modalNotice registerSuccess">{notice}</p>
                )}
                <BookingForm
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    error={error}
                />
            </div>
        </div>
    );
};

export default BooKTable;
