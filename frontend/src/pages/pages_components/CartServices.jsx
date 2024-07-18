import axios from "axios";

export const fetchCartItems = () => {
    const userCartData = localStorage.getItem("cart");
    return userCartData ? JSON.parse(userCartData) : [];
};

export const fetchCartItemsCount = () => {
    const userCartItemCount = localStorage.getItem("cart_items_count");
    return userCartItemCount ? JSON.parse(userCartItemCount) : 0;
};

export const fetchCartTotalCost = () => {
    const userCartTotalCost = localStorage.getItem("cart_total_cost");
    return userCartTotalCost ? JSON.parse(userCartTotalCost) : 0;
};

export const updateCartItemQuantity = async (cartItemId, quantity) => {
    await axios.put(
        `http://localhost:8800/api/cart/${cartItemId}`,
        { quantity },
        { withCredentials: true }
    );
};

export const deleteCartItem = async (cartItemId) => {
    await axios.delete(`http://localhost:8800/api/cart/${cartItemId}`, {
        withCredentials: true,
    });
};

export const createCheckoutSession = async (cartItems, userId) => {
    const response = await axios.post(
        `http://localhost:8800/api/stripe/create-checkout-session`,
        { cartItems, userId },
        { withCredentials: true }
    );
    return response.data.url;
};
