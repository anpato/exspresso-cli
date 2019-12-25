"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleEs5Router = void 0;
var SampleEs5Router = "const AppRouter = require('express').Router()\nconst SampleRouter = require('./SampleRouter')\n\nAppRouter.use('/', SampleRouter)\n\nmodule.exports = AppRouter";
exports.SampleEs5Router = SampleEs5Router;