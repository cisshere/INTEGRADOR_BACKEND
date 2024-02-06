import {Document, Model, model, Schema} from "mongoose";
import {IProducto, PRODUCTO_SCHEMA_NOMBRE} from "./producto";

export const COMPRA_SCHEMA_NOMBRE = "compra";

export interface ICompra extends Document {
    productos: [IProducto];
    fecha: string;
}

const schema = new Schema<ICompra>({
    productos: [{type: Schema.Types.ObjectId, ref: PRODUCTO_SCHEMA_NOMBRE}],
    fecha: {
        type: String
    }
})

const Compra: Model<ICompra> = model<ICompra>(COMPRA_SCHEMA_NOMBRE, schema);

export default Compra;