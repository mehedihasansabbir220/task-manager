const express = require('express');
const { createTask, getUserTasks, updateTaskStatus, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createTask);
router.get('/', protect, getUserTasks);
router.put('/:id', protect, updateTaskStatus);
router.delete('/:id', protect, deleteTask);

module.exports = router;
