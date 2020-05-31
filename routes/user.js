"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MQService_1 = require("../services/MQService");
const router = express_1.Router();
router.post('/msg', async (req, res, next) => {
    console.log(req.body);
    let { queueName, payload } = req.body; // queueName is the one present in config/config.json
    await MQService_1.publishToQueue(queueName, payload);
    res.status(200).send({ "message-sent": true });
    next();
});
exports.default = router;
