const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("No  page");
  }
  if (req.url === "/home") {
    res.end("home page");
  }
  if (req.url === "/about") {
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log("hello");
      }
    }
    res.end("About page");
  }
  res.end("error page");
});

server.listen(3000, () => {
  console.log("server is running at 3000");
});
