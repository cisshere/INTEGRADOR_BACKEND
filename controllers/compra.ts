import {Request, Response} from "express";
import Compra, {ICompra} from "../models/compra";
import Usuario from "../models/usuario";

export const listar = async (req: Request, res: Response) => {
    const compras = await Compra.find();

    res.json({
        compras,
    });
};

export const crear = async (req: Request, res: Response) => {
    const token = req.header('Authorization');
    let usuario = null;
    if (token) {
        usuario = await Usuario.findOne({email: JSON.parse(atob(token.split('.')[1]))._doc.email})
    }
    if (usuario) {
        const compraData: ICompra = req.body;

        const compra = new Compra(compraData);

        await compra.save();

        usuario.compras.push(compra);
        await usuario.save();

        res.json({
            msj: "Todo ok",
            compra,
        });
    } else {
        res.status(404).json({
            msj: "Acceso denegado",
        });
    }
};

export const actualizar = async (req: Request, res: Response) => {
    const compraData: ICompra = req.body;

    const compra = new Compra(compraData);

    await compra.updateOne({...compraData});

    res.json({
        msj: "Todo ok",
        compra,
    });
};
