import {Router} from "express";
import {actualizar, crear} from "../controllers/producto";

export const router = Router();

router.post("/", crear);

router.put("/", actualizar);
