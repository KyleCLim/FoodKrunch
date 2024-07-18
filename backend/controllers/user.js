import { db } from "../db.js";
import { format } from "date-fns";
import jwt from "jsonwebtoken";

export const updateUserInfo = (req, res) => {
    let date = format(new Date(), "yyyy-MM-dd HH:mm:ss");
    const token = req.cookies.access_token;

    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid");

        const q =
            "UPDATE customers SET `first_name`=?, `last_name`=?, `email`=?, `address`=?, `phone_number`=?, `updated_at`=? WHERE `customer_id`=?";
        const values = [
            req.body.fName,
            req.body.lName,
            req.body.email,
            req.body.address,
            req.body.phoneNum,
            date,
        ];

        db.query(q, [...values, userInfo.id], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("User information has been updated.");
        });
    });
};
