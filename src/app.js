const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("server is listening on port 3000..");
});


app.use("/", (req, res) => {
    res.send("hello from sever!..");
});

app.use("/hello" , (req, res) => {
    res.send("Hello from rout (/rout)");
});
