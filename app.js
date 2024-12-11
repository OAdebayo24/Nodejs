const http = require("http")
const fs = require("fs")
const path = require("path")

const PORT = 5000;

const server = http.createServer((req, res) => {
  let filePath;
  let contentType = "text/html";

  // check the URL of the incoming request
  if (req.url === "/") {
    // locate the index.html for the root url
    filePath = path.join(__dirname, "public", "index.html");
    res.writeHead(200, {"Content-Type": contentType})
  } else {
    // for other route locate the 404 page
    filePath = path.join(__dirname, "public", "404.html");
    res.writeHead(404, { "Content-Type": contentType });
  }

  // read and serve the file content
  fs.readFile(filePath, (err, content) => {
    if (err) {
      console.log(err);
      res.writeHead(500);
      res.end("Server Error", "utf8");
    } else {
      res.end(content, "utf8");
    }
  });
})

server.listen(PORT, (req, res) => {
    console.log(`Sever is listening at port: ${PORT}`)
})

