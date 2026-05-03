const express = require("express");
const app = express();
const port = 3006;

const users = [
  { id: 1, name: "Dikshant", age: 21 },
  { id: 2, name: "haris", age: 22 },
  { id: 3, name: "shubham", age: 23 },
  { id: 4, name: "navanath", age: 24 },
];

app.get("/user", (req, res) => {
  res.json(users);
});

app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  console.log(typeof id);

  let user = users.find((u) => u.id == id);
  console.log(user);

  if (user) {
    res.json(user);
  } else {
    res.send("user not found");
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
