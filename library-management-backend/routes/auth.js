const express = require('express');
const { loginUser, registerUser } = require('../controllers/authController'); // Make sure these controllers are correct
const router = express.Router();

router.post('/login', loginUser); // Login route
router.post('/register', registerUser); // Register route

module.exports = router; // Ensure the router is correctly exported
