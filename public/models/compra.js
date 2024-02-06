"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPRA_SCHEMA_NOMBRE = void 0;
const mongoose_1 = require("mongoose");
const producto_1 = require("./producto");
exports.COMPRA_SCHEMA_NOMBRE = "compra";
const schema = new mongoose_1.Schema({
    productos: [{ type: mongoose_1.Schema.Types.ObjectId, ref: producto_1.PRODUCTO_SCHEMA_NOMBRE }],
    fecha: {
        type: String
    }
});
const Compra = (0, mongoose_1.model)(exports.COMPRA_SCHEMA_NOMBRE, schema);
exports.default = Compra;
