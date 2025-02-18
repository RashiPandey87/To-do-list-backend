const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Create a task
router.post("/", authMiddleware, async (req, res) => {
    const { text, dueDate } = req.body;
    const newTask = new Task({ text, dueDate, userId: req.user.id });

    try {
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get all tasks of the user
router.get("/", authMiddleware, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Update a task
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// Delete a task
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
