import dashboardController from "@controllers/Dashboard/dashboardController";
import express from "express";
import {verifyToken} from "@middlewares/auth_middleware";

const router = express.Router();

router.get("/", verifyToken, dashboardController);

export default router;