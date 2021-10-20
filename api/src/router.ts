import users from "./routes/user";
import {json, Router, urlencoded} from "express";

const router = Router();

router.use(urlencoded({extended: true}))
router.use(json())
router.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.use('/users', users);

export default router;