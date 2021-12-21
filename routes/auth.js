/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
import { Router } from "express";
import { check } from "express-validator";

import { getUSers } from "../helpers/gets.js";

import { validarCampos } from "../middlewares/validar-campos.js";

import { validarJWT } from "../middlewares/validar-jwt.js";

const routerAuth = Router();

routerAuth.get("/:user/:password", getUSers);

export { routerAuth };
