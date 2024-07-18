import express from "express";
import {
    showCart,
    deleteFromCart,
    deleteAllCart,
    addToCart,
    updateItemQuantity,
    getCartItemCount,
    getCartTotalCost,
} from "../controllers/cart.js";

const router = express.Router();

router.get("/", showCart);
router.get("/cartItemCount", getCartItemCount);
router.get("/cartTotalCost", getCartTotalCost);
router.delete("/:cartId", deleteFromCart);
router.delete("/cartDelete/allItems", deleteAllCart);
router.post("/", addToCart);
router.put("/:cartId", updateItemQuantity);

export default router;
