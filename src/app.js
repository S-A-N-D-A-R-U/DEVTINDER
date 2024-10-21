const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("server is listening on port 3000..");
});


app.get("/user/:userId" , (req, res) => {
    console.log(req.params);
    res.send("{name: Sandaruwan, Age:24");
});


app.use("/hello" , (req, res) => {
    res.send("Hello from rout (/rout)");
});
