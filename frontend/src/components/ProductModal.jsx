import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const ProductModal = ({ onClose, name, desc, price, image, id }) => {
    // If someone tries to access this page without logging in
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    //// Quantity Functionality
    const [quantity, setQuantity] = useState(1);
    const handleMinusQuantity = (e) => {
        e.preventDefault();
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    };
    const handlePlusQuantity = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };
    const quantityRef = useRef("");
    const quantityInputRef = useRef("");

    ////Add to cart functionality
    const handleAddToCart = async (e) => {
        e.preventDefault();
        const quantityText = quantityRef.current.innerText;
        quantityInputRef.current.value = quantityText;

        try {
            const res = await axios.post(
                `http://localhost:8800/api/cart/`,
                {
                    quantityValue: quantityText,
                    product_id: { id },
                },
                { withCredentials: true }
            );
            setNotice(res.data);
            // Set a timeout to close the modal after 2 seconds
            setTimeout(() => {
                onClose();
            }, 1000);
        } catch (err) {
            console.log(err);
        }
    };

    // Product modal after adding to cart
    const [notice, setNotice] = useState(null);

    return (
        <div
            className="productModalContainer"
            onClick={(e) => {
                if (e.target.className === "productModalContainer") {
                    onClose();
                }
            }}
        >
            <form className="productModal">
                <div className="modalHeader">
                    <button onClick={() => onClose()}>&times;</button>
                </div>
                {notice && (
                    <p className="modalNotice registerSuccess">{notice}</p>
                )}
                <div className="productImgContainer">
                    <img src={`../assets/${image}`} alt="" />
                </div>
                <div className="productDetailBox">
                    <div className="productDetailHeader">
                        <h3 className="productName">{name}</h3>
                        <h3 className="productPrice">₱{price}</h3>
                        <input type="hidden" name="product_id" value={id} />
                    </div>
                    <div className="productDesc">
                        <p>{desc}</p>
                    </div>
                    <div className="productButtons">
                        <div className="productQtyContainer">
                            <button
                                className="incrementButton"
                                onClick={handleMinusQuantity}
                            >
                                -
                            </button>
                            <span ref={quantityRef} className="productQty">
                                {quantity}
                            </span>
                            <input
                                type="hidden"
                                name="quantityValue"
                                ref={quantityInputRef}
                            />
                            <button
                                className="incrementButton"
                                onClick={handlePlusQuantity}
                            >
                                +
                            </button>
                        </div>
                        <div className="cartTransactionButtons">
                            <button
                                className="transactButton cartBtn"
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductModal;
