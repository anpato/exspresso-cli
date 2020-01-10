"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = void 0;
var connection = "import 'dotenv/config'\nexport const databaseUrl = () => {\n  if (process.env.NODE_ENV === 'production') {\n    return {\n      name: 'Production',\n      connect: process.env.DATABASE_URI\n    }\n  } else {\n    return {\n      name: 'Development',\n      connect: process.env.DEVELOP_URI\n    }\n  }\n}";
exports.connection = connection;