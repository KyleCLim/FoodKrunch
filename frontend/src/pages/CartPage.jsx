import "./Pages.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./pages_components/CartItem";
import CartSummary from "./pages_components/CartSummary";
import { useAuth } from "../hooks/userAuth/useAuth";
import {
    fetchCartItems,
    fetchCartItemsCount,
    fetchCartTotalCost,
    updateCartItemQuantity,
    deleteCartItem,
    createCheckoutSession,
} from "./pages_components/CartServices";

const CartPage = () => {
    const { currentUser } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotalCost, setCartTotalCost] = useState(0);
    const navigate = useNavigate();

    const handleEdit = () => {
        //Direct to userprofile for editing userinfo data
        navigate("/user");
    };

    useEffect(() => {
        //If no current user is logged in, direct to Home
        if (!currentUser) {
            navigate("/");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        //Fetch & set cart items related data
        setCartItems(fetchCartItems());
        setCartItemsCount(fetchCartItemsCount());
        setCartTotalCost(fetchCartTotalCost());
    }, []);

    const handleMinusQuantity = async (cartItem) => {
        const updatedQuantity =
            cartItem.quantity - 1 < 1 ? 1 : cartItem.quantity - 1;
        try {
            await updateCartItemQuantity(cartItem.cart_id, updatedQuantity);
            const items = cartItems.map((item) =>
                item.cart_id === cartItem.cart_id
                    ? { ...item, quantity: updatedQuantity }
                    : item
            );
            setCartItems(items);
            localStorage.setItem("cart", JSON.stringify(items));
        } catch (err) {
            console.log(err);
        }
    };

    const handlePlusQuantity = async (cartItem) => {
        const updatedQuantity = cartItem.quantity + 1;
        try {
            await updateCartItemQuantity(cartItem.cart_id, updatedQuantity);
            const items = cartItems.map((item) =>
                item.cart_id === cartItem.cart_id
                    ? { ...item, quantity: updatedQuantity }
                    : item
            );
            setCartItems(items);
            localStorage.setItem("cart", JSON.stringify(items));
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteItem = async (itemID) => {
        try {
            await deleteCartItem(itemID);
            setCartItems(cartItems.filter((item) => item.cart_id !== itemID));
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckout = async () => {
        console.log("handleCheckout", cartItems);
        try {
            const url = await createCheckoutSession(
                cartItems,
                currentUser.customer_id
            );
            if (url) {
                window.location.href = url;
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="cartPageBackground">
            <div className="cartPageContainer">
                <div className="itemDetailBox">
                    <Link className="backLink" to="/">
                        &lArr; Go back
                    </Link>
                    <h1 className="highlightHeading cartHeader">
                        My <span>Cart</span>
                    </h1>
                    <div className="cartItemsContainer">
                        {cartItems.length < 1 && (
                            <h3 className="emptyNotice">Your cart is empty</h3>
                        )}
                        {cartItems.map((cartItem) => (
                            <CartItem
                                key={cartItem.cart_id}
                                cartItem={cartItem}
                                handleMinusQuantity={handleMinusQuantity}
                                handlePlusQuantity={handlePlusQuantity}
                                handleDeleteItem={handleDeleteItem}
                            />
                        ))}
                    </div>
                </div>
                <CartSummary
                    currentUser={currentUser}
                    cartItemsCount={cartItemsCount.itemCount}
                    cartTotalCost={cartTotalCost.totalCost}
                    handleEdit={handleEdit}
                    handleCheckout={handleCheckout}
                />
            </div>
        </div>
    );
};

export default CartPage;
