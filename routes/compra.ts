import {Router} from "express";
import {actualizar, crear, listar} from "../controllers/compra";

export const router = Router();

router.get("/", listar);

router.post("/", crear);

router.put("/", actualizar);
