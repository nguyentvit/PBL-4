const express = require('express');

const { body } = require('express-validator');

const feedController = require('../Controller/feed');
const isAuth = require('../middleware/is-auth');    

const router = express.Router();

router.get('/user', isAuth, feedController.getUsers);

module.exports = router;