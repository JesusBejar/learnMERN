const express = require("express");

// express app bb
const app = express();

// register view engine
app.set("view engine", "ejs");

// listen
app.listen(3000);

app.get("/", (req, res) => {
    // path is sensitive, but it what way?
    // res.sendFile("./views/index.html", { root: __dirname });
    // below is how you render a view
    res.render("index");
})

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

app.get("/views/create", (req, res) => {
    res.render("create")
})

// 404 page
// .use is for every incoming request, translation its a default
// be sure to put at the very bottom of route handlers
app.use((req, res) => {
    res.status(404).render("404");
    // res.status(404).sendFile("./views/404.html", { root: __dirname });
})