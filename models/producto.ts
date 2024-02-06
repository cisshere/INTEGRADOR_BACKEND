import {Document, Model, model, Schema} from "mongoose";
import {CATEGORIA_SCHEMA_NOMBRE} from "./categoria";

export const PRODUCTO_SCHEMA_NOMBRE = "producto";

export interface IProducto extends Document {
    nombre: string;
    descripcion: string;
    img: string;
    alt: string;
    precio: number;
    categoria: any;
    destacado: boolean;
}

const schema = new Schema<IProducto>({
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
        type: Schema.Types.ObjectId,
        ref: CATEGORIA_SCHEMA_NOMBRE
    },
    destacado:{
        type: Boolean,
        default: false,
    }

})

const Producto: Model<IProducto> = model<IProducto>(PRODUCTO_SCHEMA_NOMBRE, schema);

export default Producto;