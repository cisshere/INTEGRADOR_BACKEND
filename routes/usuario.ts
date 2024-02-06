import {Router} from "express";
import {actualizar, crear, listar} from "../controllers/usuario";

 export const router = Router();

router.get("/", listar);

router.post("/", crear);

router.put("/", actualizar);
