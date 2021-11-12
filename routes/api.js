const router = require("express").Router();
const { getUnixDate } = require("../controllers/apiController");

router.get("/:dateSent", getUnixDate);
module.exports = router;
