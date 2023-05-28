import express from "express";
import loginController from "@controllers/auth/loginController";
import signupController from "@controllers/auth/signupController";
import logoutController from "@controllers/auth/logoutController";

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signupController);
router.delete("/logout", logoutController);

export default router;
