"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es5Connection = void 0;
var Es5Connection = "module.exports = function() {\n  const dotenv = require('dotenv')\n  dotenv.config()\n  if (process.env.NODE_ENV === 'production') {\n    return {\n      name: 'Production',\n      connect: process.env.DATABASE_URI\n    }\n  } else {\n    return {\n      name: 'Development',\n      connect: process.env.DEVELOP_URI\n    }\n  }\n}";
exports.Es5Connection = Es5Connection;