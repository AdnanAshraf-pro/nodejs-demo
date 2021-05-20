const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./text.txt", "utf8");
    const second = await readFile("./text2.txt", "utf8");
    await writeFile(
      "./writedbyPromise.txt",
      `this is great : ${first}   ,    ${second}   haha   :`,
      { flag: "a" }
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// getText("./text.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
