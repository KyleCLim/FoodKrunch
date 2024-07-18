import { db } from "../db.js";
import jwt from "jsonwebtoken";
import Stripe from "stripe";
import env from "dotenv";

env.config();

const stripe = new Stripe(process.env.STRIPE_KEY);

export const checkoutOrder = async (req, res) => {
    const token = req.cookies.access_token;
    const cartItems = req.body.cartItems;

    const customer = await stripe.customers.create({
        metadata: { userId: req.body.userId },
    });

    const line_items = cartItems?.map((item) => {
        return {
            price_data: {
                currency: "php",
                product_data: {
                    name: item.name,
                    metadata: { id: item.cart_id },
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        };
    });

    if (!token) return res.status(401).json("Not authenticated");
    jwt.verify(token, "jwtkey", async (err, userInfo) => {
        const session = await stripe.checkout.sessions.create({
            customer: customer.id,
            line_items,
            mode: "payment",
            success_url: `${process.env.FRONTEND_URL}checkout-success`,
            cancel_url: `${process.env.FRONTEND_URL}checkout-fail`,
        });

        res.send({ url: session.url });

        //http://localhost:3000/
        // ${process.env.FRONTEND_URL}
    });
};

export const paymentWebhook = async (req, res) => {
    const data = req.body.data.object;
    const eventType = req.body.type;

    // Handle event
    if (eventType === "checkout.session.completed") {
        const customer = await stripe.customers.retrieve(data.customer);
        const timestamp = data.created;
        const readableDate = new Date(timestamp * 1000);
        const mysqlDatetimeFormat = readableDate
            .toISOString()
            .slice(0, 19)
            .replace("T", " ");
        const q =
            "INSERT INTO payments (`stripe_id`, `payment_method`, `amount`, `customer_id`, `payment_date`) VALUES(?)";
        const values = [
            data.id,
            "card",
            data.amount_total / 100,
            customer.metadata.userId,
            mysqlDatetimeFormat,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);

            return res.json("Data is save in the database");
        });
    } else {
        res.status(200).end();
    }
};
