"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PackageScripts = void 0;
var PackageScripts = "{\n  \"dev\": \"nodemon --exec babel-node ./src\",\n  \"heroku-postbuild\": \"yarn install\",\n  \"clean\": \"rm -rf build && mkdir build\",\n  \"build-babel\": \"babel -d ./build ./src -s \",\n  \"build\": \"yarn clean && yarn build-babel\",\n  \"start\": \"yarn build && node ./build/index.js\"\n}";
exports.PackageScripts = PackageScripts;