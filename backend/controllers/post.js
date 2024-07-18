import { db } from "../db.js";
import { format } from "date-fns";
import jwt from "jsonwebtoken";

export const getProducts = (req, res) => {
    const q =
        req.query.cat !== "0"
            ? "SELECT * FROM products WHERE category_id =?"
            : "SELECT * FROM products";

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.send(err);
        return res.status(200).json(data);
    });
};

export const getProduct = (req, res) => {
    res.json("from controller");
};

export const bookTable = (req, res) => {
    let date = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated");
    jwt.verify(token, "jwtkey", (err, userInfo) => {
        const q =
            "INSERT INTO bookings (`name`, `email`, `customer_num`, `booking_date`, `customer_id`, `created_at`) VALUES(?)";
        const values = [
            req.body.name,
            req.body.email,
            req.body.numPeople,
            req.body.bookingDate,
            userInfo.id,
            date,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("Table has been booked");
        });
    });
};

export const updateInfo = (req, res) => {
    res.json("from controller");
};
