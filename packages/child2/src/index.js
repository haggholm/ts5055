"use strict";
exports.__esModule = true;
var child1_1 = require("@scope/child1");
var something_1 = require("./something");
exports.bar = something_1.bar;
var something_2 = require("./something");
exports["default"] = child1_1.foo + something_2.bar;
