const fs = require('fs');
const path = require('path');

const { validationResult } = require('express-validator');
const User = require('../Model/user');


//Test
exports.getUsers = (req, res, next) => {
    const userId = req.userId;
    User.findById(userId)
        .then(user => {
            res.status(200).json({
                user: user,
                message: 'Fetched user successfully'
            })
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        })
}