const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const fileStream = fs.createReadStream(
      "./writtenbyBigFileCreation.txt",
      "utf8"
    );
    console.log(fileStream);
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000);
