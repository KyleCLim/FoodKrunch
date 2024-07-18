import React, { useState } from "react";
import axios from "axios";
import Modal from "./subcomponents/Modal";

const RegistrationModal = ({ onSubmit, onCancel, onClose }) => {
    const [inputs, setInputs] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        contactNum: "",
        address: "",
    });

    const [err, setError] = useState(null);
    const [notice, setNotice] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateInputs = () => {
        const { fName, lName, email, password, contactNum, address } = inputs;
        if (
            !fName ||
            !lName ||
            !email ||
            !password ||
            !contactNum ||
            !address
        ) {
            setError("All fields are required.");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;

        try {
            const res = await axios.post(
                "http://localhost:8800/api/auth/register",
                inputs
            );
            setNotice(res.data);
            setError(null);
        } catch (err) {
            setError(err.response.data);
        }
    };

    return (
        <Modal title="Register" onClose={onClose}>
            {notice && <p className="modalNotice registerSuccess">{notice}</p>}
            {err && <p className="modalNotice registerFailed">{err}</p>}
            <form className="modalBody">
                <input
                    className="modalInputs"
                    type="text"
                    name="fName"
                    placeholder="First name"
                    onChange={handleChange}
                    required
                />
                <input
                    className="modalInputs"
                    type="text"
                    name="lName"
                    placeholder="Last name"
                    onChange={handleChange}
                    required
                />
                <input
                    className="modalInputs"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    className="modalInputs"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    required
                />
                <input
                    className="modalInputs"
                    type="text"
                    name="contactNum"
                    placeholder="Contact number"
                    onChange={handleChange}
                    required
                />
                <input
                    className="modalInputs"
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    required
                />
                <div className="modalButtonsContainer">
                    <button
                        className="cancelButton modalButton"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="submitButton modalButton"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default RegistrationModal;
