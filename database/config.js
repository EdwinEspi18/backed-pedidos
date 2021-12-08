import mysql from "mysql";

const connection = mysql.createConnection({
  host: "107.180.26.80",
  user: "darcornetshop",
  password: "VSn9nh,nRT)P",
  database: "syspedidos3",
});
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
export { connection };
