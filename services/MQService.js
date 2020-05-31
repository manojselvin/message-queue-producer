"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishToQueue = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
const config_1 = require("../config");
let channel = null;
amqplib_1.default.connect(config_1.CONN_URL).then((conn) => {
    conn.createChannel().then((ch) => {
        channel = ch;
    });
});
exports.publishToQueue = async (queueName, data) => {
    channel.sendToQueue(queueName, new Buffer(data));
};
process.on('exit', (code) => {
    channel.close();
    console.log(`Closing rabbitmq channel`);
});
