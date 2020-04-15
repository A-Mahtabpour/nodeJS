const mysql = require("mysql");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "newpassword",
  database: "mydb",
});

conection.connect((err) => {
  if (!err) {
    console.log("mysql connected");
  } else {
    console.log(err);
  }
});

module.exports = conection;
