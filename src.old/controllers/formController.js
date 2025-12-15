// This file contains functions for processing form data, including validation and database interactions.

const { validationResult } = require('express-validator');
const userService = require('../services/userService');

exports.submitForm = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const formData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        alternativeNumber: req.body.alternativeNumber,
        email: req.body.email,
        gender: req.body.gender,
        age: req.body.age,
        address: req.body.address,
        doorNumber: req.body.doorNumber,
        city: req.body.city,
        district: req.body.district,
        state: req.body.state,
        pincode: req.body.pincode,
    };

    try {
        const savedUser = await userService.saveUser(formData);
        res.status(201).json({ message: 'Form submitted successfully', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error saving form data', error: error.message });
    }
};