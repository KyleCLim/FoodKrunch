import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cartRoutes from "./routes/carts.js";
import paymentRoutes from "./routes/payments.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

app.use("/api/posts", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/stripe", paymentRoutes);

app.listen(8800, () => {
    console.log("Connected to server!");
});
