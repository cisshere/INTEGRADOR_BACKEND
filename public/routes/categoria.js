"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const categoria_1 = require("../controllers/categoria");
exports.router = (0, express_1.Router)();
exports.router.post("/", categoria_1.crear);
exports.router.put("/", categoria_1.actualizar);
