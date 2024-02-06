"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const producto_1 = require("../controllers/producto");
const categoria_1 = require("../controllers/categoria");
exports.router = (0, express_1.Router)();
exports.router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, contrasenia } = new usuario_1.default(req.body);
        const usuario = yield usuario_1.default.findOne({ email });
        if (!usuario) {
            return res.status(401).json({ error: 'Fallo' });
        }
        const passwordMatch = yield bcrypt_1.default.compare(contrasenia, usuario.contrasenia);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Fallo' });
        }
        const token = jsonwebtoken_1.default.sign(Object.assign({}, usuario), 'BACK-INT', {
            expiresIn: "2 days",
        });
        res.status(200).json({ token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Login failed' });
    }
}));
exports.router.post("/registo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let usuario = new usuario_1.default(req.body);
        usuario.contrasenia = yield bcrypt_1.default.hash(usuario.contrasenia, 10);
        yield usuario.save();
        const token = jsonwebtoken_1.default.sign(Object.assign({}, usuario), 'BACK-INT', {
            expiresIn: "2 days",
        });
        res.status(201).json({ token });
    }
    catch (error) {
        res.status(500).json({ error: 'Fallo el registro' });
    }
}));
exports.router.get("/producto/", producto_1.listar);
exports.router.get("/producto/destacados", producto_1.listarDestacados);
exports.router.get("/categoria", categoria_1.listar);
