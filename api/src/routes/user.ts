import {createUser, getUser, getUsers} from "../views/user";
import {Router} from "express";

const router = Router();

router.post('/create', createUser)
router.get('/', getUsers);
router.get('/:name', getUser);


export default router;