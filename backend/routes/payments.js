import express from "express";
import { checkoutOrder, paymentWebhook } from "../controllers/payment.js";
import bodyParser from "body-parser";

const router = express.Router();

router.post("/create-checkout-session", checkoutOrder);
router.post(
    "/payment-webhook",
    bodyParser.raw({ type: "application/json" }),
    paymentWebhook
);

export default router;
