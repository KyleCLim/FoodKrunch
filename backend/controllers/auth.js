import { db } from "../db.js";
import bcrypt from "bcryptjs";
import { format } from "date-fns";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
    let date = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    //CHECK EXISTING USER
    const q = "SELECT * FROM customers WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0)
            return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q =
            "INSERT INTO customers (`first_name`, `last_name`, `email`, `password`, `address`, `phone_number`, `created_at`, `updated_at`) VALUES (?)";
        const values = [
            req.body.fName,
            req.body.lName,
            req.body.email,
            hash,
            req.body.address,
            req.body.contactNum,
            date,
            date,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("You are successfully registered");
        });
    });
};

export const login = (req, res) => {
    // CHECK USER
    const q = "SELECT * FROM customers WHERE email = ?";

    db.query(q, [req.body.email], (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        // Check/compare password
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong email or password!");

        const token = jwt.sign({ id: data[0].customer_id }, "jwtkey"); //use an information that is unique to the customer which is the "customer_id" from the database
        // console.log(data[0].customer_id);
        const { password, ...other } = data[0];
        console.log("You're successfully logged in");
        res.cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json(other);
    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    })
        .status(200)
        .json("User has been logged out.");
};
