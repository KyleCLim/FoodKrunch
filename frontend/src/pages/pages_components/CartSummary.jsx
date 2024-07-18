import React from "react";

const CartSummary = ({
    currentUser,
    cartItemsCount,
    cartTotalCost,
    handleEdit,
    handleCheckout,
}) => {
    return (
        <div className="checkoutSummaryBox">
            <h1>Order Summary</h1>
            <div className="userDetail">
                <h3>
                    {currentUser?.first_name} {currentUser?.last_name}
                </h3>
                <p>{currentUser?.email}</p>
            </div>

            <div className="userAddress">
                <p className="address">{currentUser?.address}</p>
                <button className="checkoutEditButton" onClick={handleEdit}>
                    Edit
                </button>
            </div>
            <div className="checkoutSummary">
                <div className="subtotal">
                    <p>Subtotal ({cartItemsCount} item/s)</p>
                    <p>₱ {cartTotalCost}</p>
                </div>
                <div className="shippingCost">
                    <p>Shipping costs</p>
                    <p>FREE!</p>
                </div>
                <div className="discount">
                    <p>Discount</p>
                    <p>---</p>
                </div>
                <div className="totalCheckout">
                    <div className="totalCost">
                        <p>Total (incl. VAT)</p>
                        <h4>₱ {cartTotalCost}</h4>
                    </div>
                    <div className="checkoutButtonContainer">
                        <button
                            className="checkoutButton"
                            onClick={handleCheckout}
                        >
                            CHECKOUT ({cartItemsCount})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
