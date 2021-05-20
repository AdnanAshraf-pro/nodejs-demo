const http = require("http");

const server = http.createServer();

server.on("requst", (req, res) => {
  res.end("ended response");
  console.log("hello");
});

server.listen(3000);
