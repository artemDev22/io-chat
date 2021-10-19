const express = require('express');
const {createUser, getUser} = require("../views/user");
const router = express.Router();

router.post('/create', createUser);
router.get('/:name', getUser);

module.exports = router;