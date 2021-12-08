import express from "express";
import dot from "dotenv";
dot.config();
import cors from "cors";
import { connection } from "./database/config.js";
/*import { routerAuth } from "./routes/auth.js";*/
/*import { routerEvent } from "./routes/events.js";*/

// Crear el servidor de express
const app = express();

// Base de datos
connection.query("SELECT * from users", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[1]);
});

// CORS
app.use(cors());

// Directorio Público
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
/*
app.use("/api/auth", routerAuth);
app.use("/api/events", routerEvent);*/

// Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
