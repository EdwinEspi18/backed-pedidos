import express from "express";
import dot from "dotenv";
dot.config();
import cors from "cors";
import { connection } from "./database/config.js";
import { routerAuth } from "./routes/auth.js";
import { orderRouter } from "./routes/order.js";

// Crear el servidor de express
const app = express();

// Base de datos

// CORS
app.use(cors());

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas

app.use("/api/auth", routerAuth);
app.use("/api/orders", orderRouter);

setInterval(function () {
  connection.query("SELECT 1");
}, 5000);
// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
