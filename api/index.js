const express = require(`express`);
const router = express.Router();

const messages = require(`./controllers/messages`);


const logger = require(`./middlewares/logger`);

router.use(`/messages`, messages);

router.use(logger);

module.exports = router;