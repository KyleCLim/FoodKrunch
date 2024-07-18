import { useState, useEffect } from "react";

export const useCart = () => {
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        const userCartItemCount = localStorage.getItem("cart_items_count");
        if (userCartItemCount) {
            const parsedCount = JSON.parse(userCartItemCount);
            setCartItemsCount(parsedCount.itemCount);
        }
    }, []);

    return {
        cartItemsCount,
    };
};
