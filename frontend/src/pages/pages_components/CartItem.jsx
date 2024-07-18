import React from "react";

const CartItem = ({
    cartItem,
    handleMinusQuantity,
    handlePlusQuantity,
    handleDeleteItem,
}) => {
    const imagePath = `../assets/${cartItem.img}`;

    return (
        <div className="cartItemDetails" key={cartItem.cart_id}>
            <div className="cartItemImgContainer">
                <img src={imagePath} alt="item" />
            </div>
            <div className="itemTextDetails">
                <h4>{cartItem.name}</h4>
                <p>₱ {cartItem.price}</p>
            </div>
            <div className="itemQty">
                <button onClick={() => handleMinusQuantity(cartItem)}>-</button>
                <input
                    className="cartItemQuantity"
                    name="itemQuantity"
                    id="itemQuantity"
                    value={cartItem.quantity}
                    placeholder={cartItem.quantity}
                />
                <button onClick={() => handlePlusQuantity(cartItem)}>+</button>
            </div>
            <div className="itemTotalCost">
                <h3>₱ {cartItem.price * cartItem.quantity}</h3>
            </div>
            <div className="cartItemButtonsContainer">
                <button
                    className="cartDeleteButton"
                    onClick={() => handleDeleteItem(cartItem.cart_id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default CartItem;
