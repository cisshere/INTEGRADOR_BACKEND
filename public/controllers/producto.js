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
exports.actualizar = exports.crear = exports.listarDestacados = exports.listar = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const listar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield producto_1.default.find();
    res.json({
        productos,
    });
});
exports.listar = listar;
const listarDestacados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield producto_1.default.find({ destacado: true });
    res.json({
        productos,
    });
});
exports.listarDestacados = listarDestacados;
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productoData = req.body;
    const producto = new producto_1.default(productoData);
    yield producto.save();
    res.json({
        msj: "Todo ok",
        producto,
    });
});
exports.crear = crear;
const actualizar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productoData = req.body;
    const producto = new producto_1.default(productoData);
    yield producto.save();
    res.json({
        msj: "Todo ok",
        producto,
    });
});
exports.actualizar = actualizar;
