const express = require('express');
const router = express.Router(); 
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes.js');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
