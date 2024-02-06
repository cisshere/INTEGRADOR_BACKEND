"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const compra_1 = require("../controllers/compra");
exports.router = (0, express_1.Router)();
exports.router.get("/", compra_1.listar);
exports.router.post("/", compra_1.crear);
exports.router.put("/", compra_1.actualizar);
