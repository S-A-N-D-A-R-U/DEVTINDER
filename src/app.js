const express = require("express");

const app = express();

app.use("/user",(req, res, next ) => {
  console.log("user verify");
  next();
} )

app.listen(3000, () => {
  console.log("server is listening on port 3000..");
});

app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the rout user!!");
    // res.send("Response!!");
    next();
  },
  (req, res) => {
    console.log("Handling the rout user!!");
    res.send("2 nd Response!!");
  }
);

app.use("/hello", (req, res) => {
  res.send("Hello from rout (/rout)");
});
