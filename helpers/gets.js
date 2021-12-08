import { connection } from "../database/config.js";

export const getUSers = (req, res) => {
  const { user } = req.params;
  let resu;
  connection.query("SELECT * from users", async function (error, results) {
    if (error) throw error;

    const resu = await results.find((userS) => userS.username === user);
    console.log(resu);
  });
  connection.end();
  res.json(resu);
};
