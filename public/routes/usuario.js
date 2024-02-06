"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
exports.router = (0, express_1.Router)();
exports.router.get("/", usuario_1.listar);
exports.router.post("/", usuario_1.crear);
exports.router.put("/", usuario_1.actualizar);
