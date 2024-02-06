"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const configBD_1 = require("./baseDatos/configBD");
const publicas_1 = require("./routes/publicas");
const usuario_1 = require("./routes/usuario");
const categoria_1 = require("./routes/categoria");
const compra_1 = require("./routes/compra");
const producto_1 = require("./routes/producto");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.conectaBD();
        this.middlewares();
        this.routes();
    }
    conectaBD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, configBD_1.contectarBaseDatos)();
        });
    }
    middlewares() {
        function verifyToken(req, res, next) {
            const token = req.header('Authorization');
            if (!token)
                return res.status(401).json({ error: 'Acceso denegado' });
            try {
                jsonwebtoken_1.default.verify(token, 'BACK-INT');
                next();
            }
            catch (error) {
                res.status(401).json({ error: 'Token invalido' });
            }
        }
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
        this.app.use(publicas_1.router);
        this.app.use(verifyToken);
    }
    routes() {
        this.app.use('/usuario', usuario_1.router);
        this.app.use('/categoria', categoria_1.router);
        this.app.use('/producto', producto_1.router);
        this.app.use('/compra', compra_1.router);
    }
    listen() {
        this.app.listen(8080, () => {
            console.log("Corriendo en el puerto 8080");
        });
    }
}
exports.Server = Server;
