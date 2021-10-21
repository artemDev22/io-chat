import {Router} from "express";
import {createUser, getUser, getUsers} from "../views/user";

const router = Router();

router.post("/create", createUser);
router.get("/", getUsers);
router.get("/:name", getUser);

export default router;
