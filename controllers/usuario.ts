import {Request, Response} from "express";

import Usuario, {IUsuario} from "../models/usuario";

export const listar = async (req: Request, res: Response) => {
    const users = await Usuario.find();
    const datos = users.map((user) => {
        return {
            _id: user._id,
            email: user.email,
            nombre: user.nombre,
            apellido: user.apellido,
        };
    })

    res.json({
        users: datos,
    });
};

export const crear = async (req: Request, res: Response) => {
    const userData: IUsuario = req.body;

    const usuario = new Usuario(userData);

    await usuario.save();

    res.json({
        msj: "Todo ok",
        usuario,
    });
};

export const actualizar = async (req: Request, res: Response) => {
    const userData: IUsuario = req.body;

    const usuario = new Usuario(userData);

    await usuario.save();

    res.json({
        msj: "Todo ok",
        usuario,
    });
};
