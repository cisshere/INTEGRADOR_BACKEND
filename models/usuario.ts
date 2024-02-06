import {Document, Model, model, Schema} from "mongoose";
import {COMPRA_SCHEMA_NOMBRE, ICompra} from "./compra";

export interface IUsuario extends Document {
    email: string;
    contrasenia: string;
    nombre: string;
    apellido: string;
    compras: [ICompra];
}

const schema = new Schema<IUsuario>({
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
    compras: [{type: Schema.Types.ObjectId, ref: COMPRA_SCHEMA_NOMBRE}]
})

const Usuario: Model<IUsuario> = model<IUsuario>("usuario", schema);

export default Usuario;