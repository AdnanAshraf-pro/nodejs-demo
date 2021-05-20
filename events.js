const eventEmitter = require("events");

const customEmitter = new eventEmitter();

customEmitter.on("response", () => {
  console.log(`Data received`);
});

customEmitter.emit("response");
