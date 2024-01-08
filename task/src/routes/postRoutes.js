const express = require('express');
const router = express.Router();
const post = require('../controller/posts.js');

router.post("/user", (req, res) => post.create(req, res));
router.put("/user/:id", (req, res) => post.findById(req, res));
router.delete("/user/:id", (req, res) => post.findByI(req, res)); 

module.exports = router;
