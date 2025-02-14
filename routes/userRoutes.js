const express = require("express");
const { searchUser } = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/search/:query", authMiddleware, searchUser);

module.exports = router;
