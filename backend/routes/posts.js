import express from "express";
import {
    getProducts,
    getProduct,
    updateInfo,
    bookTable,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/book", bookTable);
router.put("/:id", updateInfo);

export default router;
