import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const contectarBaseDatos = async (): Promise<void> => {
  try {
    const bsConnection = "mongodb+srv://integrador:integrador6245*@cluster0.4fpzyrc.mongodb.net/?retryWrites=true&w=majority";

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
