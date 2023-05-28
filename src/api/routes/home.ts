import express from "express";
import homeController from "@controllers/home/homeController";
import authenticate from "@middlewares/authentication";

const router = express.Router();

router.get("/", authenticate, homeController);

export default router;
