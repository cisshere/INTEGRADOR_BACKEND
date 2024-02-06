import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const contectarBaseDatos = async (): Promise<void> => {
  try {
    const bsConnection = process.env.BD_CONNECTION;

    if (!bsConnection) {
      throw new Error("La variable BD_CONNECTION no esta definida en .env");
    }
    await mongoose.connect(bsConnection);
    console.log("base de datos on");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar base de datos");
  }
};
