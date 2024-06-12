const http = require("http");
// req, res are both objects
// request object practice
const server = http.createServer((req, res) => {
    // console.log("request made");
    // console.log(req);
    console.log(req.url, req.method);
});

// parameters = port number, domain name, callback function
// localhost is a loop back domain
server.listen(3000, "localhost", () => {
    console.log("listening on port 3000")
});