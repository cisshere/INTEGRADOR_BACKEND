import {Router} from "express";
import {actualizar, crear, listar} from "../controllers/categoria";

export const router = Router();

router.post("/", crear);

router.put("/", actualizar);
