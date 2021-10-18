const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "tony",
  host: "175.45.63.58",
  password: "Lunatoys123",
  database: "world",
});

app.get("/Login", (req, res) => {
  const username = req.query.username;
  const userpassword = req.query.userpassword;
  db.query(
    "SELECT count(*) as userNumber from owners where user_name = ? and user_password = ?",
    [username, userpassword],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(...result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
