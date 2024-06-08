import { Router } from "express";
import { registerUser, aiModel, loginUser, llmModel } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router()


router.route("/register").post(
    upload.fields([                               //yeh humara middleware hai
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)
router.route("/login").post(loginUser)
router.route("/qa").post(aiModel)
router.route("/llm").post(llmModel)

export default router