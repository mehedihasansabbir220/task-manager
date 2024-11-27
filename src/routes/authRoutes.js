const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.post(
    '/register',
    [
        check('name', 'Name is required').notEmpty(),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password must be at least 6 characters long').isLength({ min: 6 }),
    ],
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    register
);
router.post('/login', login);

module.exports = router;
