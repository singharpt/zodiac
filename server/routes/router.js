const express = require("express");
const getUniqueZodiacData = require("../routes/aync_methods/db_unique_req_method");
const getAllZodiacData = require("../routes/aync_methods/db_all_req_method");
const router = express.Router();

/* GET home page. */
router.get("/zodiac", getAllZodiacData);

/* GET unique zodiac page. */
router.get("/zodiac/:id", getUniqueZodiacData);

module.exports = router;
