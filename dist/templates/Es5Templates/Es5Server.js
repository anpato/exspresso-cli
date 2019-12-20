"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es5Server = void 0;
var Es5Server = "const dotenv = require('dotenv')\nconst express = require('express')\nconst mongoose = require('mongoose')\nconst bodyParser = require('body-parser')\nconst helmet = require('helmet')\nconst logger = require('morgan')\nconst cors = require('cors')\nconst databaseUrl = require('./config')\nconst AppRouter = require('./routes')\n\ndotenv.config()\n\nconst App = express()\nconst PORT = process.env.PORT || 3001\n\nApp.use(helmet())\nApp.disable('x-powered-by')\nApp.use(logger('dev'))\nApp.use(cors())\nApp.use(bodyParser.urlencoded({ extended: true }))\nApp.use(bodyParser.json())\n\n// Mongodb Connection\nmongoose.connect(databaseUrl().connect, {\n  useNewUrlParser: true,\n  useCreateIndex: true\n})\nconst connection = mongoose.connection\nconnection.once('open', function() {\n  console.log('Connected to: '+databaseUrl().name)\n})\n\n// Mongodb Connection\nApp.get('/', (req, res) => res.status(200).json({ msg: 'Exspresso' }))\nApp.use('/api', AppRouter)\nApp.listen(PORT)\n";
exports.Es5Server = Es5Server;