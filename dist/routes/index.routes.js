"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _database = require("../database/database");

var _express = require("express");

var router = (0, _express.Router)();
router.get('/', function (req, res) {
  return res.send('hello to my apirest');
});
var _default = router;
exports["default"] = _default;