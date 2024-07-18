import React from "react";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import ProductModal from "./ProductModal";
import LoginModal from "./LoginModal";
// import { useModal } from "../hooks/navbar/useModal";
import { useAuth } from "../hooks/userAuth/useAuth";
// import { useMenuCartState } from "../hooks/menu/useMenuCartState";
import { useMenuProductFetch } from "../hooks/menu/useMenuProductFetch";
import { useMenuModalDisplay } from "../hooks/menu/useMenuModalDisplay";

const Menu = () => {
    const { currentUser, login } = useAuth();
    const { products } = useMenuProductFetch();
    const { modal, setModal, selectedProduct, showModal } =
        useMenuModalDisplay();

    const categories = [
        { name: "ALL", catID: 0 },
        { name: "BURGERS", catID: 1 },
        { name: "DESSERTS", catID: 2 },
        { name: "DRINKS", catID: 3 },
        { name: "MEATS", catID: 4 },
        { name: "PASTA", catID: 5 },
        { name: "PIZZAS", catID: 6 },
        { name: "SALADS", catID: 7 },
    ];

    return (
        <div className="menuSectionContainer" id="menuSection">
            {modal === "product" &&
                selectedProduct &&
                createPortal(
                    <ProductModal
                        key={selectedProduct.product_id}
                        id={selectedProduct.product_id}
                        name={selectedProduct.name}
                        desc={selectedProduct.description}
                        price={selectedProduct.price}
                        image={selectedProduct.image}
                        onClose={() => setModal(null)}
                    />,
                    document.body
                )}
            {modal === "login" &&
                createPortal(
                    <LoginModal
                        onSubmit={login}
                        onCancel={() => setModal(null)}
                        onClose={() => setModal(null)}
                    />,
                    document.body
                )}
            <div className="menuSectionTextContainer">
                <h1 className="highlightHeading">
                    Our <span>Menu</span>
                </h1>
                <p className="primaryText">
                    Choose any from our list of delicious dishes we offer.
                    Guaranteed to satisfy your cravings for tasty foods!
                </p>
                <div className="lineSeparator"></div>
            </div>
            <div className="menuButtonsContainer">
                {categories.map((category) => (
                    <Link
                        className="catButtons"
                        key={category.catID}
                        to={`/?cat=${category.catID}`}
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
            <div className="selectedDishesContainer">
                {products.map((product) => {
                    const imagePath = `../assets/${product.image}`;
                    return (
                        <div className="dishCard" key={product.product_id}>
                            <div className="dishImgContainer">
                                <img
                                    className="dishImg"
                                    src={imagePath}
                                    alt="image"
                                />
                            </div>
                            <div className="dishDetailBox">
                                <Link
                                    className="link"
                                    onClick={() =>
                                        showModal(product, currentUser)
                                    }
                                >
                                    <h3 className="dishName">{product.name}</h3>
                                </Link>
                                <div className="toCartSection">
                                    <button
                                        className="cartButton"
                                        onClick={() =>
                                            showModal(product, currentUser)
                                        }
                                    >
                                        <BsCart2 className="menuCartIcon" />
                                    </button>
                                    <h4 className="dishPrice">
                                        ₱ {product.price}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
