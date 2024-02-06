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
const compra_1 = __importDefault(require("../models/compra"));
const usuario_1 = __importDefault(require("../models/usuario"));
const listar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const compras = yield compra_1.default.find();
    res.json({
        compras,
    });
});
exports.listar = listar;
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('Authorization');
    let usuario = null;
    if (token) {
        usuario = yield usuario_1.default.findOne({ email: JSON.parse(atob(token.split('.')[1]))._doc.email });
    }
    if (usuario) {
        const compraData = req.body;
        const compra = new compra_1.default(compraData);
        yield compra.save();
        usuario.compras.push(compra);
        yield usuario.save();
        res.json({
            msj: "Todo ok",
            compra,
        });
    }
    else {
        res.status(404).json({
            msj: "Acceso denegado",
        });
    }
});
exports.crear = crear;
const actualizar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const compraData = req.body;
    const compra = new compra_1.default(compraData);
    yield compra.updateOne(Object.assign({}, compraData));
    res.json({
        msj: "Todo ok",
        compra,
    });
});
exports.actualizar = actualizar;
