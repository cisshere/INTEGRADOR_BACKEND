import {Router} from "express";
import Usuario from "../models/usuario";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {listar as litarProductos, listarDestacados} from "../controllers/producto";
import {listar as listarCategorias} from "../controllers/categoria"

export const router = Router();

router.post("/login", async (req, res) => {
    try {
        const {email, contrasenia} = new Usuario(req.body);
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.status(401).json({error: 'Fallo'});
        }
        const passwordMatch = await bcrypt.compare(contrasenia, usuario.contrasenia);
        if (!passwordMatch) {
            return res.status(401).json({error: 'Fallo'});
        }
        const token = jwt.sign({...usuario}, 'BACK-INT', {
            expiresIn: "2 days",
        });
        res.status(200).json({token});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Login failed'});
    }
});

router.post("/registo", async (req, res) => {
    try {

        let usuario = new Usuario(req.body);

        usuario.contrasenia = await bcrypt.hash(usuario.contrasenia, 10);
        await usuario.save();
        const token = jwt.sign({...usuario}, 'BACK-INT', {
            expiresIn: "2 days",
        });
        res.status(201).json({token});
    } catch (error) {
        res.status(500).json({error: 'Fallo el registro'});
    }
});

router.get("/producto/", litarProductos);

router.get("/producto/destacados", listarDestacados);

router.get("/categoria", listarCategorias);
