"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serverConfigEs6 = void 0;
var serverConfigEs6 = "import 'dotenv/config'\nimport express from 'express'\nimport { connect, connection } from 'mongoose'\nimport bodyParser from 'body-parser'\nimport helmet from 'helmet'\nimport logger from 'morgan'\nimport cors from 'cors'\nimport { databaseUrl } from './config'\nimport Router from './routes'\n\nconst App = express()\nconst PORT = process.env.PORT || 3001\n\nApp.use(helmet())\nApp.disable('x-powered-by')\nApp.use(logger('dev'))\nApp.use(cors())\nApp.use(bodyParser.urlencoded({ extended: true }))\nApp.use(bodyParser.json())\n\n// Mongodb Connection\nconnect(databaseUrl().connect, {\n  useNewUrlParser: true,\n  useFindAndModify: false,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n}, (err) => {\n  console.log('Could not connect, verify connection url.', err)\n})\nconnection.once('open', () => {\n  console.log('Connected to: ' + databaseUrl().name)\n})\nconnection.once('error', ()=> {\n  console.log('Could not connect to: ' + databaseUrl().name)\n})\n// Mongodb Connection\nApp.get('/', (req, res) => res.status(200).json({ msg: 'Exspresso' }))\nApp.use('/api', Router)\nApp.listen(PORT)\n";
exports.serverConfigEs6 = serverConfigEs6;