import {json, Router, urlencoded} from "express";
import swaggerUi from "swagger-ui-express";
import chats from "./routes/chat";
import users from "./routes/user";

const router = Router();

router.use(urlencoded({extended: true}));

router.use(json());

router.use((req: any, res: any, next: any) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

router.use("/swagger", swaggerUi.serve, swaggerUi.setup(null));

router.use("/users", users);
router.use("/chats", chats);

export default router;
