"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIA_SCHEMA_NOMBRE = void 0;
const mongoose_1 = require("mongoose");
exports.CATEGORIA_SCHEMA_NOMBRE = "categoria";
const schema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
});
const Categoria = (0, mongoose_1.model)(exports.CATEGORIA_SCHEMA_NOMBRE, schema);
exports.default = Categoria;
