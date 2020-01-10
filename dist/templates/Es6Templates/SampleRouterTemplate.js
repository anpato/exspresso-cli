"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SampleRouterEs6 = void 0;
var SampleRouterEs6 = "import { Router } from 'express'\nimport SampleRouter from './SampleRouter'\n\nconst AppRouter = Router()\n\nAppRouter.use('/sample', SampleRouter)\n\nexport default AppRouter\n";
exports.SampleRouterEs6 = SampleRouterEs6;