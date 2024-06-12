const http = require("http");
// req, res are both objects
// request object practice
const server = http.createServer((req, res) => {
    // console.log("request made");
    // console.log(req);
    console.log(req.url, req.method);

    // respond object practice
    // set header content type
    // res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Type", "text/html");

    // res.write("hola broski");
    res.write("<p>hola broski!<p>");

    res.end();
});

// parameters = port number, domain name, callback function
// localhost is a loop back domain
server.listen(3000, "localhost", () => {
    console.log("listening on port 3000")
});