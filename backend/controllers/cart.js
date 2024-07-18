import { db } from "../db.js";
import { format } from "date-fns";
import jwt from "jsonwebtoken";

export const showCart = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        const q =
            "SELECT `cart_id`, `quantity`, `customer_id`, carts.product_id, products.name AS name, products.price AS price, products.image AS img FROM carts LEFT JOIN products ON carts.product_id=products.product_id WHERE customer_id=?";

        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.json(err);

            return res.json(data);
        });
    });
};

export const addToCart = (req, res) => {
    let date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        const addItemQuery =
            "INSERT INTO carts (`quantity`, `customer_id`, `product_id`, `created_at`, `updated_at` ) VALUES(?)";

        const values = [
            Number(req.body.quantityValue),
            userInfo.id,
            req.body.product_id.id,
            date,
            date,
        ];

        db.query(addItemQuery, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("Item has been added to cart");
        });
    });
};

export const deleteFromCart = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        const cartId = req.params.cartId;
        const q = "DELETE FROM carts WHERE `cart_id`=? AND `customer_id`=?";

        db.query(q, [cartId, userInfo.id], (err, data) => {
            if (err)
                return res
                    .status(403)
                    .json("You can only delete items from your cart");

            return res.json("Item has been deleted from cart");
        });
    });
};

export const updateItemQuantity = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");
        const cartId = req.params.cartId;
        const q =
            "UPDATE carts SET `quantity`=? WHERE `cart_id`=? AND `customer_id`=?";
        const values = [req.body.quantity, cartId, userInfo.id];

        db.query(q, [...values, cartId, userInfo], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("Item quantity has been updated.");
        });
    });
};

export const getCartItemCount = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        const q =
            "SELECT COUNT(*) AS item_count FROM carts WHERE `customer_id`=?";

        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.json(err);
            const itemCount = data[0].item_count;
            return res.json({ itemCount });
        });
    });
};

export const getCartTotalCost = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        const q =
            "SELECT SUM(`per_item_total_cost`) AS total_cost FROM (SELECT `cart_id`, products.name, `customer_id`, `quantity`, products.price AS price, quantity * price AS `per_item_total_cost` FROM carts LEFT JOIN products ON carts.product_id=products.product_id) AS `temp_table` WHERE `customer_id`=?";

        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.json(err);
            const totalCost = data[0].total_cost;
            return res.json({ totalCost });
        });
    });
};

export const deleteAllCart = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        const q = "DELETE FROM carts WHERE customer_id = ?";

        db.query(q, [userInfo.id], (err, data) => {
            if (err) return res.json(err);
            return res.json("Cart is empty");
        });
    });
};
