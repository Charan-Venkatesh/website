const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

// Route to handle form submission
router.post('/submit', formController.submitForm);

// Route to retrieve form data (if needed)
router.get('/data', formController.getFormData);

module.exports = router;