import {Document, model, Model, Schema} from "mongoose";

export const CATEGORIA_SCHEMA_NOMBRE = "categoria";

export interface ICategoria extends Document {
    nombre: string;
}

const schema = new Schema<ICategoria>({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
})

const Categoria: Model<ICategoria> = model<ICategoria>(CATEGORIA_SCHEMA_NOMBRE, schema);

export default Categoria;