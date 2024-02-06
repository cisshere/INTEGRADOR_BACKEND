"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const producto_1 = require("../controllers/producto");
exports.router = (0, express_1.Router)();
exports.router.post("/", producto_1.crear);
exports.router.put("/", producto_1.actualizar);
