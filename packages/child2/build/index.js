"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child1_1 = require("@scope/child1");
var something_1 = require("./something");
exports.bar = something_1.bar;
const something_2 = require("./something");
exports.default = child1_1.foo + something_2.bar;
