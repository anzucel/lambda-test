'use strict';
const app = require('./src/app');
const Serverless = require('serverless-http');
module.exports.hello = Serverless(app);