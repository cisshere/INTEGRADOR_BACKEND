import {Request, Response} from "express";
import Categoria, {ICategoria} from "../models/categoria";


export const listar = async (req: Request, res: Response) => {
    const categorias = await Categoria.find();

    res.json({
        categorias,
    });
};

export const crear = async (req: Request, res: Response) => {
    const categoriaData: ICategoria = req.body;

    const categoria = new Categoria(categoriaData);

    await categoria.save();

    res.json({
        msj: "Todo ok",
        categoria,
    });
};

export const actualizar = async (req: Request, res: Response) => {
    const categoriaData: ICategoria = req.body;

    const categoria = new Categoria(categoriaData);

    await categoria.save();

    res.json({
        msj: "Todo ok",
        categoria,
    });
};
