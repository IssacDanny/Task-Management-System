const express = require("express");
const {protect, adminOnly} = require("../middlewares/authenticationMiddleware");
const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashBoardData,
    getUserDashBoardData,
} = require("../controllers/taskController");
const router = express.Router();

// Task Management Routes
router.get("/dashboard_data", protect, getDashBoardData);
router.get("/user_Dashboard_data", protect, getUserDashBoardData);
router.get("/", protect, getTasks); // Get all tasks (Admin: all, User: assigned)
router.get("/:id", protect, getTaskById); // Get task by id
router.post("/", protect, adminOnly, createTask); // Create a task (Admin only)
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskChecklist); // Update task checklist

module.exports = router;