// This file contains functions for interacting with the database, including user data retrieval and validation against stored records.

const db = require('../config/db'); // Assuming there's a db configuration file

const userService = {
    getUserById: async (userId) => {
        try {
            const user = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
            return user[0];
        } catch (error) {
            throw new Error('Error retrieving user data');
        }
    },

    createUser: async (userData) => {
        try {
            const { firstName, lastName, phoneNumber, email } = userData;
            const result = await db.query('INSERT INTO users (first_name, last_name, phone_number, email) VALUES (?, ?, ?, ?)', 
                [firstName, lastName, phoneNumber, email]);
            return result.insertId;
        } catch (error) {
            throw new Error('Error creating user');
        }
    },

    validateUser: async (email, password) => {
        try {
            const user = await db.query('SELECT * FROM users WHERE email = ?', [email]);
            if (user.length > 0 && user[0].password === password) {
                return user[0];
            }
            return null;
        } catch (error) {
            throw new Error('Error validating user');
        }
    }
};

module.exports = userService;