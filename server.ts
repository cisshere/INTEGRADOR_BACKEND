import express, {Express} from "express"
import {contectarBaseDatos} from "./baseDatos/configBD";
import {router as publicasRutas} from "./routes/publicas";
import {router as usuarioRutas} from "./routes/usuario";
import {router as categoriaRutas} from "./routes/categoria";
import {router as compraRutas} from "./routes/compra";
import {router as productoRutas} from "./routes/producto";
import jwt from 'jsonwebtoken';
import cors from 'cors';

export class Server {

    app: Express;

    constructor() {
        this.app = express();
        this.conectaBD();
        this.middlewares();
        this.routes();
    }

    async conectaBD(): Promise<void> {
        await contectarBaseDatos()
    }

    middlewares(): void {

        function verifyToken(req: any, res: any, next: any) {
            const token = req.header('Authorization');
            if (!token) return res.status(401).json({ error: 'Acceso denegado' });
            try {
                jwt.verify(token, 'BACK-INT');
                next();
            } catch (error) {
                res.status(401).json({ error: 'Token invalido' });
            }
        }

        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(publicasRutas);
        this.app.use(verifyToken);
    }

    routes(): void {
        this.app.use('/usuario', usuarioRutas);
        this.app.use('/categoria', categoriaRutas);
        this.app.use('/producto', productoRutas);
        this.app.use('/compra', compraRutas);
    }

    listen(): void {
        this.app.listen(8080, () => {
            console.log("Corriendo en el puerto 8080")
        })
    }
}