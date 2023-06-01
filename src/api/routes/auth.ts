import express from "express";
import loginController from "@controllers/auth/loginController";
import signupController from "@controllers/auth/signupController";
import logoutController from "@controllers/auth/logoutController";
import getAccessToken from "@controllers/auth/refreshController";
import {verifyToken,verifyRefreshToken} from "@middlewares/auth_middleware";

const router = express.Router();

router.post("/login", loginController);
router.post("/signup", signupController);
router.post("/logout",verifyToken, logoutController);
router.post("/refresh", verifyRefreshToken, getAccessToken);

export default router;
