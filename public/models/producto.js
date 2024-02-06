"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTO_SCHEMA_NOMBRE = void 0;
const mongoose_1 = require("mongoose");
const categoria_1 = require("./categoria");
exports.PRODUCTO_SCHEMA_NOMBRE = "producto";
const schema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    alt: {
        type: String,
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: categoria_1.CATEGORIA_SCHEMA_NOMBRE
    },
    destacado: {
        type: Boolean,
        default: false,
    }
});
const Producto = (0, mongoose_1.model)(exports.PRODUCTO_SCHEMA_NOMBRE, schema);
exports.default = Producto;
