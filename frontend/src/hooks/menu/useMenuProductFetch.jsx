import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const useMenuProductFetch = () => {
    const [products, setProducts] = useState([]);
    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8800/api/posts${cat ? cat : "?cat=0"}`
                );
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

    return { products };
};
