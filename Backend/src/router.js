
const Controller = require("./controller")
const Express = require("express");

const router = Express.Router();


router.post("/saveenquiry",Controller);

module.exports = router;