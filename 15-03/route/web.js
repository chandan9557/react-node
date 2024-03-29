import express from "express";
import user from "../controller/userController.js";
const router = express.Router();

router.get("/api", user.getData);
router.post("/api/create", user.createData);
router.delete("/api/:id", user.deleteData);
router.get("/api/:id", user.findOne);
router.put("/api/:id", user.updateData);
export default router;
