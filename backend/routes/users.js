import express from "express";
import { updateUserInfo } from "../controllers/user.js";

const router = express.Router();

router.put("/update", updateUserInfo);

export default router;
