import {Request, Response} from "express";
import {ICategoria} from "../models/categoria";
import Producto from "../models/producto";


export const listar = async (req: Request, res: Response) => {
    const productos = await Producto.find();

    res.json({
        productos,
    });
};

export const listarDestacados = async (req: Request, res: Response) => {
    const productos = await Producto.find({destacado: true});

    res.json({
        productos,
    });
};

export const crear = async (req: Request, res: Response) => {
    const productoData: ICategoria = req.body;

    const producto = new Producto(productoData);

    await producto.save();

    res.json({
        msj: "Todo ok",
        producto,
    });
};

export const actualizar = async (req: Request, res: Response) => {
    const productoData: ICategoria = req.body;

    const producto = new Producto(productoData);

    await producto.save();

    res.json({
        msj: "Todo ok",
        producto,
    });
};
