// This file contains functions for handling authentication logic, including user login and session management.

const UserService = require('../services/userService');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserService.findUserByEmail(email);
        if (!user || !(await UserService.comparePassword(password, user.password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Assuming a session management strategy is in place
        req.session.userId = user.id;
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed', error: err });
        }
        res.status(200).json({ message: 'Logout successful' });
    });
};