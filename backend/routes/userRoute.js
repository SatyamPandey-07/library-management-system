import { Router } from "express";
import { adminLogin, login, registerUser, verifySignedUpUsers } from "../controllers/user.controller.js";
import upload from "../middleware/uploadfile.middleware.js";

const router = Router()

router.post("/register", upload.single("idCardImage"), registerUser)
router.post("/login", login);
router.post("/login/admin", adminLogin)
router.post("/verify-signed-up-user", verifySignedUpUsers)

export default router