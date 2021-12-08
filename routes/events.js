/*
    Event Routes
    /api/events
*/
import { Router } from "express";
import { check } from "express-validator";

import { isDate } from "../helpers/isDate.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} from "../controllers/events.js";

const routerEvent = Router();

// Todas tienes que pasar por la validación del JWT
routerEvent.use(validarJWT);

// Obtener eventos
routerEvent.get("/", getEventos);

// Crear un nuevo evento
routerEvent.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar Evento
routerEvent.put(
  "/:id",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

// Borrar evento
routerEvent.delete("/:id", eliminarEvento);

export { routerEvent };
