"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const compra_1 = require("./compra");
const schema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    compras: [{ type: mongoose_1.Schema.Types.ObjectId, ref: compra_1.COMPRA_SCHEMA_NOMBRE }]
});
const Usuario = (0, mongoose_1.model)("usuario", schema);
exports.default = Usuario;
