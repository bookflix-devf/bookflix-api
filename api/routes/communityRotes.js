import { Router } from "express";
import { createCommunity } from "../controllers/communityControllers/communityController.js";

const communityRouter = Router({
    mergeParams: true,
    strict: true,
});

communityRouter.post('/', createCommunity);

export default communityRouter;