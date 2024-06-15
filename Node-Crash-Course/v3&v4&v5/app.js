const express = require("express");

// express app bb
const app = express();

// listen
app.listen(3000);

// below is a better switch case??
app.get("/", (req, res) => {
    // send infers content header and status code
    // is the same as .write and .end
    res.send("<p>broooooooo</p>")
})

// they are called route handlers
app.get("/about", (req, res) => {
    res.send("<p>broooooooo about</p>")
})

app.get("/index", (req, res) => {
    // path is sensitive, but it what way?
    res.sendFile("./views/index.html", { root: __dirname });
})