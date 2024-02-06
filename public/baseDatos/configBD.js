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
exports.contectarBaseDatos = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const contectarBaseDatos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bsConnection = "mongodb+srv://integrador:integrador6245*@cluster0.4fpzyrc.mongodb.net/?retryWrites=true&w=majority";
        if (!bsConnection) {
            throw new Error("La variable BD_CONNECTION no esta definida en .env");
        }
        yield mongoose_1.default.connect(bsConnection);
        console.log("base de datos on");
    }
    catch (error) {
        console.log(error);
        throw new Error("Error al iniciar base de datos");
    }
});
exports.contectarBaseDatos = contectarBaseDatos;
