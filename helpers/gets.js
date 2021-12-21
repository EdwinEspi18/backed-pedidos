import { connection } from "../database/config.js";
import crypto from "crypto";

export const getUSers = async (req, res) => {
  const { user, password } = req.params;
  let resultado;
  const ur = crypto.createHash("md5").update(password).digest("hex").toString();

  try {
    connection.query(
      "SELECT username, password, id FROM users WHERE username = ? AND password = ?",
      [user, ur],
      async (error, results) => {
        if (error) return res.status(404).json({ err: error });

        if (results.length > 0) {
          return res.status(200).json(results[0]);
        } else {
          return res.status(404).json({
            err: "Usuario o contraseña incorrectos",
          });
        }
      }
    );
  } catch (error) {
    res.status(404).json({ err: error });
  }
};

export const getOrders = () => {
  return "getOrders";
};
