// const http = require("http");
// const fs = require("fs");
// const _ = require("lodash");
// // req, res are both objects
// // request object practice
// const server = http.createServer((req, res) => {
//     // console.log("request made");
//     // console.log(req);
//     // console.log(req.url, req.method);

//     // LODASH CODE
//     // random will give you a random num between two parameters
//     const num = _.random(0, 20);
//     console.log(num);

//     // once will let you run a function only once
//     const greet = _.once(() => {
//         console.log("ciao ciao");
//     });
//     greet();
//     // respond object practice
//     // set header content type
//     // res.setHeader("Content-Type", "text/plain");
//     res.setHeader("Content-Type", "text/html");

//     // routing code
//     // routing goes into server.js files??
//     let path = './views/';
//     switch(req.url) {
//         case "/":
//             path += 'index.html';
//             res.statusCode = 200
//             break;
//         case "/about":
//             path += 'about.html';
//             res.statusCode = 200
//             break;
//         // redirect case statement 
//         case "/about-me":
//             // 301 = permanent redirect
//             res.statusCode = 301
//             res.setHeader("Location", "/about-us");
//             res.end();
//             break;
//         default:
//             path += '404.html';
//             res.statusCode = 404
//             break;
//     }
//     // switch case statements are good
//     // switch case with Express framework is better

//     // send html file
//     fs.readFile(path, (err, data) => {
//     if (err) {
//         console.log(err);
//         res.end();
//     } else {
//         // res.write(data);
//         res.end(data);
//     }
//     });

//     // send plain or html text
//     // res.write("hola broski");
//     // res.write("<p>hola broski!<p>");
//     // res.end();
//     });

// // parameters = port number, domain name, callback function
// // localhost is a loop back domain
// server.listen(3000, "localhost", () => {
//     console.log("listening on port 3000")
// });