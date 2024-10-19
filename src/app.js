const express = require("express");

const app = express();

app.listen(3000, () => {
    console.log("server is listening on port 3000..");
});


app.get("/user" , (req, res) => {
    res.send("{name: Sandaruwan, Age:24");
});

app.post("/user" , (req, res) => {
    res.send("post is success")
})

app.use("/", (req, res) => {
    res.send("hello from sever!..");
});

app.use("/hello" , (req, res) => {
    res.send("Hello from rout (/rout)");
});
