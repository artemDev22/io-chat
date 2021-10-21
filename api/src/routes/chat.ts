import {Router} from "express";
import {createChat} from "../views/chat";

const router = Router();

router.post("/create", createChat);

export default router;
