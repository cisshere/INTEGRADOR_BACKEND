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
const categoria_1 = __importDefault(require("../models/categoria"));
const listar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categorias = yield categoria_1.default.find();
    res.json({
        categorias,
    });
});
exports.listar = listar;
const crear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaData = req.body;
    const categoria = new categoria_1.default(categoriaData);
    yield categoria.save();
    res.json({
        msj: "Todo ok",
        categoria,
    });
});
exports.crear = crear;
const actualizar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categoriaData = req.body;
    const categoria = new categoria_1.default(categoriaData);
    yield categoria.save();
    res.json({
        msj: "Todo ok",
        categoria,
    });
});
exports.actualizar = actualizar;
