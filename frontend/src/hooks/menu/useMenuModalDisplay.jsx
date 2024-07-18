import { useState } from "react";

export const useMenuModalDisplay = () => {
    const [modal, setModal] = useState("");
    const [selectedProduct, setSelectedProduct] = useState({});

    const showModal = (product, currentUser) => {
        if (currentUser) {
            setSelectedProduct(product);
            setModal("product");
        } else {
            setModal("login");
        }
    };

    return { modal, setModal, selectedProduct, showModal };
};
