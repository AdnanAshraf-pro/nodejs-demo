const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("hello there");
  res.end();
});

server.listen(3000);
