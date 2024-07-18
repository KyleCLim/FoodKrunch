import React from "react";

const Modal = ({ title, children, onClose }) => {
    return (
        <div
            className="modalContainer"
            onClick={(e) => {
                if (e.target.className === "modalContainer") {
                    onClose();
                }
            }}
        >
            <div className="modalClass">
                <div className="modalHeader">
                    <button onClick={onClose}>&times;</button>
                </div>
                <h1 className="modalTitle">{title}</h1>
                {children}
            </div>
        </div>
    );
};

export default Modal;
