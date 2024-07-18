import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import Modal from "./subcomponents/Modal";

const LoginModal = ({ onCancel, onClose }) => {
    const { currentUser, login } = useContext(AuthContext);
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [err, setError] = useState(null);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const validateInputs = () => {
        const { email, password } = inputs;
        if (!email || !password) {
            setError("All fields are required.");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateInputs()) return;

        try {
            await login(inputs);
            setError(null);
        } catch (err) {
            setError(err.response.data);
        }
    };

    useEffect(() => {
        if (currentUser) {
            onClose();
        }
    }, [currentUser, onClose]);

    return (
        <Modal title="Login" onClose={onClose}>
            {err && <p className="modalNotice registerFailed">{err}</p>}
            <form className="modalBody">
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

export default LoginModal;
