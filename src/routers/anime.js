const express = require("express");
const router = express.Router();

const controller = require("../controllers/anime.controller");

router.get("/", controller.index);
router.get("/watch/:id", controller.watch);

module.exports = router;
