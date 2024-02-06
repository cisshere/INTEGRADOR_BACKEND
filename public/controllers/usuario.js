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
exports.actualizar = exports.crear = exports.listar = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const listar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuario_1.default.find();
    const datos = users.map((user) => {
        return {
            _id: user._id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
        };
    });
    res.json({
        users: datos,
    });
});
exports.listar = listar;
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const usuario = new usuario_1.default(userData);
    yield usuario.save();
    res.json({
        msj: "Todo ok",
        usuario,
    });
});
exports.crear = crear;
const actualizar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const usuario = new usuario_1.default(userData);
    yield usuario.save();
    res.json({
        msj: "Todo ok",
        usuario,
    });
});
exports.actualizar = actualizar;
