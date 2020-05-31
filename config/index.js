"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONN_URL = exports.QUEUE_NAME = void 0;
const nconf_1 = __importDefault(require("nconf"));
nconf_1.default.use('file', { file: './config/config.json' });
exports.QUEUE_NAME = nconf_1.default.get('QUEUE_NAME');
exports.CONN_URL = nconf_1.default.get('CONN_URL');
