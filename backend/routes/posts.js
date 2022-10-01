const express = require("express");
const { getAllPosts, } = require("../controllers/postController");

const router = express.Router();

router.route("/posts").get(getAllPosts);

module.exports = router;