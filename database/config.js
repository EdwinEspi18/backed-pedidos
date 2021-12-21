import mysql from "mysql";

const connection = mysql.createConnection({
  host: "107.180.26.80",
  user: "darcornetshop",
  password: "darcornetshop",
  database: "syspedidos4",
});
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("DB is connected");
});
export { connection };
