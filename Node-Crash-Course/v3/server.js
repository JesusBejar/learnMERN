const http = require("http");
const fs = require("fs");
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

    // routing code
    // routing goes into server.js files??
    let path = './views/';
    switch(req.url) {
        case "/":
            path += 'index.html';
            res.statusCode = 200
            break;
        case "/about":
            path += 'about.html';
            res.statusCode = 200
            break;
        default:
            path += '404.html';
            res.statusCode = 404
            break;
    }

    // send html file
    fs.readFile(path, (err, data) => {
    if (err) {
        console.log(err);
        res.end();
    } else {
        // res.write(data);
        res.end(data);
    }
    });

    // send plain or html text
    // res.write("hola broski");
    // res.write("<p>hola broski!<p>");
    // res.end();
    });

// parameters = port number, domain name, callback function
// localhost is a loop back domain
server.listen(3000, "localhost", () => {
    console.log("listening on port 3000")
});