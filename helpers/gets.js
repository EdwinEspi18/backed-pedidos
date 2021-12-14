import { connection } from "../database/config.js";
import crypto from "crypto";

export const getUSers = async (req, res) => {
  const { user, password } = req.params;
  let resultado;
  const ur = crypto.createHash("md5").update(password).digest("hex").toString();
  try {
    connection.query("SELECT * from users", async function (error, results) {
      if (error) throw error;

      resultado = await results.map((userS) =>
        userS.username === user && userS.password === ur
          ? userS
          : { err: "Usuario o contraseña incorrectos" }
      );

      return res.json(resultado);
    });
  } catch (error) {
    res.json({ err: error });
  }

  /* connection.end(); */
};
