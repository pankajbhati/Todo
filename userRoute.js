var express = require("express");
var router = express.Router();
var con = require("./connectSql");

const sql = "Select * from users";

const CREATE_SQL = (username, password) => {
  return `INSERT into users (username, password) values (${username}, ${password});`;
};

const USER_SQL = (username, password) => {
  return `SELECT ID from users where username = "${username}" and password = "${password}";`;
};

const LIST_SQL = (userID) => {
  return 'SELECT * from list where userId = "${userID}";';
};

router.post("/user", async (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    res.send(
      JSON.stringify({ error: "username and password required in parameter" })
    );
    return;
  }
  const query = CREATE_SQL(req.body.username, req.body.password);
  con.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error creating user");
    } else {
      res.send(JSON.stringify({ status: "account created" }));
    }
  });
});

router.post("/user/auth", (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    res.send(
      JSON.stringify({ error: "username and password required in parameter" })
    );
    return;
  }
  const query = USER_SQL(req.body.username, req.body.password);
  console.log(query);
  con.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(JSON.stringify({ error: "database error" }));
    } else {
      const tmpUser = result[0];
      const response = {
        status: "success",
        userID: tmpUser.ID,
      };
      res.send(response);
    }
  });
});

router.get("/app/sites/list" + userId, (req, res) => {
  const query = LIST_SQL(userId);
  con.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send(JSON.stringify({ error: "database error" }));
    } else {
    }
  });
});

router.get("/sites/lists", (req, res) => {});

module.exports = router;
