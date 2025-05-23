const express = require("express")
const { adminOnly, protect } = require("../middlewares/authenticationMiddleware");
const { getUsers, getUserById, deleteUser } = require("../controllers/userController");
const router = express.Router();

// User Management Routes
router.get("/", protect, adminOnly, getUsers); // Ger all users (Admin only)
router.get("/", protect, getUserById); // Get a specific user

module.exports = router;