"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _commands = require("./commands");

Object.keys(_commands).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _commands[key];
    }
  });
});

var _ignore = require("./ignore");

Object.keys(_ignore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ignore[key];
    }
  });
});