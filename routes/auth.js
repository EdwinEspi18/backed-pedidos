/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/
import { Router } from "express";
import { check } from "express-validator";

import { validarCampos } from "../middlewares/validar-campos.js";

import { validarJWT } from "../middlewares/validar-jwt.js";

const routerAuth = Router();

routerAuth.post("/new", [
  // middlewares
  check("name", "El nombre es obligatorio").not().isEmpty(),
  check("email", "El email es obligatorio").isEmail(),
  check("password", "El password debe de ser de 6 caracteres").isLength({
    min: 6,
  }),
  validarCampos,
]);

routerAuth.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  loginUsuario
);

routerAuth.get("/renew", validarJWT, revalidarToken);

export { routerAuth };
