import { useState, useEffect } from "react";

export const useMenuCartState = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const userCartData = localStorage.getItem("cart");
        if (userCartData) {
            setCartItems(JSON.parse(userCartData));
        }
    }, []);

    return { cartItems, setCartItems };
};
