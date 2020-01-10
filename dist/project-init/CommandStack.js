"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _child_process = require("child_process");

var _util = require("util");

var CommandStack =
/*#__PURE__*/
function () {
  function CommandStack(commands, project_name, params) {
    (0, _classCallCheck2["default"])(this, CommandStack);
    this.commands = commands;
    this.project_name = project_name;
    this.params = params;
    this.index = 0;
    this.execute = (0, _util.promisify)(_child_process.exec);
  }

  (0, _createClass2["default"])(CommandStack, [{
    key: "executeCommand",
    value: function executeCommand() {
      var index;
      return _regenerator["default"].async(function executeCommand$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              index = 0;

            case 2:
              if (!(index < this.commands.length)) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return _regenerator["default"].awrap(this.execute(this.commands[index](this.project_name, this.params)));

            case 5:
              index++;
              _context.next = 2;
              break;

            case 8:
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);

            case 12:
              _context.prev = 12;
              this.index++;
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 10, 12, 15]]);
    }
  }, {
    key: "next",
    value: function next(index) {
      return this.commands[index + 1];
    }
  }, {
    key: "last",
    value: function last() {
      return this.commands[this.commands.length - 1];
    }
  }, {
    key: "runQueue",
    value: function runQueue() {
      // console.log(this.commands[this.index](this.project_name, this.params))
      // while (this.index < this.commands.length) {
      this.executeCommand(this.index);
    }
  }]);
  return CommandStack;
}();

exports["default"] = CommandStack;