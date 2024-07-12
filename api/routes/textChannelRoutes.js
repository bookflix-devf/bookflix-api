import { Router } from "express";
import { createTextChannel } from "'../controllers/communityControllers/textChannelController.js'";
import { authUser } from "../middlewares/authValidator.js";

const textChannelRouter = Router();

textChannelRouter.post("/", authUser(["author"]), createTextChannel);
export default textChannelRouter;
