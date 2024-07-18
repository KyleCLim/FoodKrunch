import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    ////////////---LOGIN STATE & SETTING USER INFO IN LOCAL STORAGE---//////////////
    const login = async (inputs) => {
        const res = await axios.post(
            "http://localhost:8800/api/auth/login",
            inputs,
            { withCredentials: true } // additional
        );
        setCurrentUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
    };

    ////////////---LOGOUT STATE---//////////////
    const logout = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/logout");
        setCurrentUser(null);
        localStorage.removeItem("user");
    };

    ////////////---STORING USER INFO TO LOCAL STORAGE---//////////////
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    ////////////---STORING CART ITEMS TO LOCAL STORAGE---//////////////
    useEffect(() => {
        const fetchData = async () => {
            if (!currentUser) return localStorage.removeItem("cart");

            try {
                const res = await axios.get(`http://localhost:8800/api/cart/`, {
                    withCredentials: true,
                });
                // console.log(res.data);
                localStorage.setItem("cart", JSON.stringify(res.data));
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [currentUser]);

    ///////////---STORING CART ITEMS COUNT TO LOCAL STORAGE---/////////
    useEffect(() => {
        const fetchData = async () => {
            if (!currentUser)
                return localStorage.removeItem("cart_items_count");

            try {
                const res = await axios.get(
                    `http://localhost:8800/api/cart/cartItemCount`,
                    {
                        withCredentials: true,
                    }
                );

                localStorage.setItem(
                    "cart_items_count",
                    JSON.stringify(res.data)
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [currentUser]);

    ///////////---STORING CART TOTAL COST TO LOCAL STORAGE---/////////
    useEffect(() => {
        const fetchData = async () => {
            if (!currentUser) return localStorage.removeItem("cart_total_cost");
            try {
                const res = await axios.get(
                    `http://localhost:8800/api/cart/cartTotalCost`,
                    {
                        withCredentials: true,
                    }
                );

                localStorage.setItem(
                    "cart_total_cost",
                    JSON.stringify(res.data)
                );
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
